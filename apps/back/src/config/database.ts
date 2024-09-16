import { connect } from "mongoose";

export const connectDB = async () => {
    try {
        await connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error(err);
        }
    }
};
