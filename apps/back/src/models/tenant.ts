import { Tenant, FileInfo } from "@models";
import mongoose from "mongoose";

const tenantSchema = new mongoose.Schema<Tenant>({
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    employment: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        enum: ["euro", "francs", "dollars"],
        required: true,
    },
    comment: {
        type: String,
    },
    files: {
        type: [Object],
    },
    entryDate: {
        type: Date,
    },
    exitDate: {
        type: Date,
    },
    rental: {
        type: Object,
    },
});
tenantSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

tenantSchema.set("toJSON", {
    virtuals: true,
});

export const TenantModel = mongoose.model("Tenant", tenantSchema);
