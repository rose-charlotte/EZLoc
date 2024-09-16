import express from "express";
import { UserController } from "../controllers/userController";

export const UserRouter = express.Router();

UserRouter.post("/user", UserController.createUser);
