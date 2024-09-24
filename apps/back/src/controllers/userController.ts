import { Request, Response } from "express";
import { generateRefreshToken, generateToken } from "../jwtUtils";

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
    async login(req: Request, res: Response) {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.sendStatus(400).json("utilisateur invalide");
        }
        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (err) {
                    logger.error(err);
                }
                if (result === true) {
                    const token = generateToken(user);
                    const refreshToken = generateRefreshToken(user);

                    res.cookie("refreshToken", refreshToken!, {
                        httpOnly: true,
                        maxAge: 86400,
                        path: "/api/refresh",
                    }).json({
                        success: true,
                        message: "Authentication successfull",
                        token: token,
                    });
                } else {
                    res.status(401).json({
                        success: false,
                        message: "invalide username or password",
                    });
                }
            });
        }
    },
};
