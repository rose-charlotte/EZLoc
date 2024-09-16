import { Request, Response } from "express";

export const UserController = {
    async createUser(req: Request, res: Response) {
        console.log("je recois", req.body);
        res.status(200).json({ message: "tu es connecté" });
    },
};
