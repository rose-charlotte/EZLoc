import { Request, Response } from "express";
import { RentalModel } from "../models/rental";
import { Rental } from "@models";
import { logger } from "../logger";

export const RentalController = {
    async createRental(req: Request, res: Response): Promise<void> {
        try {
            const newRental = req.body as Rental;

            const rental = new RentalModel(newRental);

            await rental.save();

            res.status(201).json(rental);
            logger.info(`new rental ${rental} has been created in the base`);
        } catch (err) {
            logger.error(err);
            res.sendStatus(500);
        }
    },

    async getRentals(req: Request, res: Response) {
        try {
            const results = await RentalModel.find();
            res.status(200).json(results);
        } catch (err) {
            logger.error(err);
        }
    },
};
