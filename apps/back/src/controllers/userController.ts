import { Request, Response } from "express";
import { generateRefreshToken, generateToken } from "../jwtUtils";
import jwt from "jsonwebtoken";

const user = {
    email: "toto@toto.fr",
    password: "toto",
};
export const UserController = {
    async createUser(req: Request, res: Response) {
        console.log("je recois", req.body);
        res.status(200).json({ message: "tu es connecté" });
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
