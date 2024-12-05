import { Request, Response } from "express";
import { RentalModel } from "../models/rental";
import { Rental } from "@models";
import { logger } from "../logger";

export const RentalController = {
    async createRental(req: Request, res: Response): Promise<void> {
        try {
            const newRental = req.body as Rental;

            const rentalExists = await RentalModel.countDocuments({ id: newRental.id }, { limit: 1 });

            if (rentalExists > 0) {
                logger.info(`email ${newRental.id} was used multiple times to sign up`);
                res.sendStatus(409);

                return;
            }

            const rental = new RentalModel(newRental);

            await rental.save();

            res.status(201).json(rental);
            logger.info(`new rental ${rental} has been created in the base`);
        } catch (err) {
            logger.error(err);
            res.sendStatus(500);
        }
    },
};
