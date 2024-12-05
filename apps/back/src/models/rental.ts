import { Rental } from "@models";
import mongoose, { VirtualType } from "mongoose";

const rentalSchema = new mongoose.Schema<Rental>({
    name: {
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

rentalSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

rentalSchema.set("toJSON", {
    virtuals: true,
});

export const RentalModel = mongoose.model("Rental", rentalSchema);
