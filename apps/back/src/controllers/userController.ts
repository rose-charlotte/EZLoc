import { Request, Response } from "express";
import { generateRefreshToken, generateToken } from "../jwtUtils";
//import jwt from "jsonwebtoken";

const user = {
    email: "toto@toto.fr",
    password: "toto",
};
import bcrypt from "bcrypt";
import { User } from "../models/user";
import { logger } from "../logger";
import { SignUpRequest } from "@models";

const saltRounds = 10;
export const UserController = {
    async createUser(req: Request, res: Response) {
        try {
            //https://github.com/rose-charlotte/EZLoc/issues/69
            const signUpRequest = req.body as SignUpRequest;

            const userExists = await User.countDocuments({ email: signUpRequest.email }, { limit: 1 });

            if (userExists > 0) {
                logger.info(`email ${signUpRequest.email} was used multiple times to sign up`);
                res.sendStatus(409);

                return;
            }

            const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

            const user = new User({
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
    async getOne(req: Request, res: Response) {
        console.log("loggin:", req.body);

        if (req.body.email === user.email && req.body.password === user.password) {
            const token = generateToken(user);
            const refreshToken = generateRefreshToken(user);

            res.json({
                success: true,
                message: "Authentication successfull",
                token: token,
                refreshToken: refreshToken,
            });
        } else {
            res.status(401).json({
                success: false,
                message: "invalide username or password",
            });
        }
    },

    //     async refreshToken(req: Request, res: Response) {
    //         const token = req.headers.authorization?.split(" ")[1];
    //         const secretKey = process.env.REFRESH_TOKEN_SECRET;
    //         if (token == null || undefined) {
    //             return res.sendStatus(401);
    //         }
    //         if (!secretKey) {
    //             return;
    //         }

    //         jwt.verify(token, secretKey, (err, user) => {
    //             if (err) {
    //                 return res.sendStatus(401);
    //             }

    //             const refreshToken = generateRefreshToken(user);
    //         });
    //     },
};
