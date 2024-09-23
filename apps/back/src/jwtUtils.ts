import jwt from "jsonwebtoken";

export function generateToken(payload: object) {
    const secretKey = process.env.ACCESS_TOKEN_SECRET;
    const option = {
        expiresIn: 5 * 60,
    };
    if (!secretKey) {
        return;
    }
    const accessToken = jwt.sign(payload, secretKey, option);
    return accessToken;
}

export function generateRefreshToken(payload: object) {
    const secretKey = process.env.REFRESH_TOKEN_SECRET;
    const option = {
        expiresIn: "1y",
    };
    if (!secretKey) {
        return;
    }
    const refreshToken = jwt.sign(payload, secretKey, option);
    return refreshToken;
}
