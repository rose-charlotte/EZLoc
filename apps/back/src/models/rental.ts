import { Rental } from "@models";
import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema<Rental>({
    id: {
        type: String,
        required: true,
    },
    rentalType: {
        type: String,
        enum: ["home", "apartment", "studio", "garage", "other"],
        required: true,
    },
    rentalInfo: {
        type: String,
        enum: ["furnished", "empty", "other"],
        required: true,
    },
    rent: {
        type: Number,
        required: true,
    },
    rentalCharges: {
        type: Number,
        required: true,
    },
    globalSize: {
        type: Number,
        required: true,
    },

    street: {
        type: String,
        required: true,
    },
    streetInfo: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },

    roomsInfo: {
        type: [Object],
        required: true,
    },
});

export const RentalModel = mongoose.model("Rental", rentalSchema);
