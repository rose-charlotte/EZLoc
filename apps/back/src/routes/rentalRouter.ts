import express from "express";
import { RentalController } from "../controllers/rentalController";

export const RentalRouter = express.Router();

RentalRouter.post("/rental", RentalController.createRental);
RentalRouter.get("/rental", RentalController.getRentals);
