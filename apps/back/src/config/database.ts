import { connect } from "mongoose";
import { logger } from "../logger";

export const connectDB = async () => {
    try {
        await connect(process.env.MONGODB_URI);
        logger.debug("MongoDB connected");
    } catch (err) {
        if (err instanceof Error) {
            logger.error(err.message);
        } else {
            logger.error(err);
        }
    }
};
