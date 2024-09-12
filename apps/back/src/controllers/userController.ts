import { Request, Response } from "express";

export const UserController = {
    async get(req: Request, res: Response) {
        console.log(req.body);
        const email = req.body.email;
        console.log(email);
        res.status(200).json({ message: "tu es connecté" });
    },
};
