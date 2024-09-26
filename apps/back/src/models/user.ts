import mongoose from "mongoose";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    address?: string;
    phone?: string;
    password: string;
}

const userSchema = new mongoose.Schema<User>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: String,
    phone: String,
    password: {
        type: String,
        required: true,
    },
});

export const UserModel = mongoose.model("User", userSchema);
