import { Request, Response } from "express";
import { generateRefreshToken, generateAccessToken } from "../jwtUtils";

import bcrypt from "bcrypt";
import { UserModel } from "../models/user";
import { logger } from "../logger";
import { SignInErrorCode, SignInRequest, SignInResponse, SignUpRequest } from "@models";
import jwt, { JwtPayload } from "jsonwebtoken";
const saltRounds = 10;
export const UserController = {
    async createUser(req: Request, res: Response) {
        try {
            // Do request validation
            // https://github.com/rose-charlotte/EZLoc/issues/69
            const signUpRequest = req.body as SignUpRequest;

            const userExists = await UserModel.countDocuments({ email: signUpRequest.email }, { limit: 1 });

            if (userExists > 0) {
                logger.info(`email ${signUpRequest.email} was used multiple times to sign up`);
                res.sendStatus(409);

                return;
            }

            const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

            const user = new UserModel({
                ...signUpRequest,
                password: hashedPassword,
            });

            await user.save();

            res.status(201).json(user);
            logger.info(`user ${user} has been created in the base`);
        } catch (err) {
            logger.error(err);
            res.sendStatus(500);
        }
    },
    async login(req: Request, res: Response<SignInResponse>) {
        // Do request validation
        // https://github.com/rose-charlotte/EZLoc/issues/69
        const request = req.body as SignInRequest;

        const user = await UserModel.findOne({ email: request.email });

        if (!user) {
            logger.warn(`user with email ${request.email} was not found`);
            res.sendStatus(400);

            return;
        }

        const passwordMatch = await bcrypt.compare(request.password, user.password);

        if (!passwordMatch) {
            logger.warn(`user with email ${request.email} provided the wrong password`);

            res.status(400).json({
                success: false,
                errorCode: SignInErrorCode.InvalidUsernameOrPassword,
            });

            return;
        }

        logger.info(`user with email ${request.email} logged in successfully`);

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: process.env.REFRESH_TOKEN_EXPIRATION_MINUTES * 60 * 1000,
            path: "/refresh",
            secure: true,
        }).json({
            success: true,
            accessToken,
        });
    },

    async getUserProfile(req: Request, res: Response) {
        const token = req.headers.authorization?.split("Bearer")[1].trim();
        const decodedToken = jwt.decode(token!);
        if (token) {
            const user = await UserModel.findOne({ email: (decodedToken as JwtPayload).email });
            if (!user) {
                logger.warn(`user with email ${(decodedToken as JwtPayload).email} was not found`);
                return;
            }
            console.log(user);
            res.status(200).json(user);
        }
    },
};
