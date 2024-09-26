import jwt from "jsonwebtoken";
import { User } from "./models/user";

export function generateAccessToken(user: User): string {
    const secretKey = process.env.ACCESS_TOKEN_SECRET;

    const option = {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_MINUTES * 60,
    };

    return jwt.sign({ email: user.email }, secretKey, option);
}

export function generateRefreshToken(user: User): string {
    const secretKey = process.env.REFRESH_TOKEN_SECRET;

    const option = {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRATION_MINUTES * 60,
    };

    return jwt.sign({ email: user.email }, secretKey, option);
}
