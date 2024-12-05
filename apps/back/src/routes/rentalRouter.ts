import express from "express";
import { RentalController } from "../controllers/rentalController";

export const RentalRouter = express.Router();

RentalRouter.post("/newRental", RentalController.createRental);
RentalRouter.get("/home", RentalController.getRentals);
