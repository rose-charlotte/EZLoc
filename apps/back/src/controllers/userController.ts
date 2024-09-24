import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import { logger } from "../logger";
import { SignUpRequest } from "@models";

const saltRounds = 10;
export const UserController = {
    async createUser(req: Request, res: Response) {
        try {
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

            res.status(200).json(user);
            logger.info(`user ${user} has been created in the base`);
        } catch (err) {
            logger.error(err);
            res.sendStatus(500);
        }
    },
};
