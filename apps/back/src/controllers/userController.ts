import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/user";

export const UserController = {
    async createUser(req: Request, res: Response) {
        console.log("je recois", req.body);
        const user = new User(req.body);
        await user.save();
        res.status(200).json(user);
    },
};
