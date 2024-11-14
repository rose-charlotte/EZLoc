import { NewRental } from "@models";
import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema<NewRental>({
    id: {
        type: String,
        required: true,
    },
    rentalType: {
        type: String,
        required: true,
    },
    rentalInfo: {
        type: String,
        required: true,
    },
    loyer: {
        type: String,
        required: true,
    },
    charges: {
        type: String,
        required: true,
    },
    globalSize: {
        type: String,
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
    rooms: {
        type: String,
        required: true,
    },
    roomsInfo: {
        type: [Object],
        required: true,
    },
});

export const RentalModel = mongoose.model("Rental", rentalSchema);
