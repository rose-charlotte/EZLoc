import { connect } from "mongoose";

export const connectDB = async () => {
    try {
        const mongoURI: string = "mongodb://localhost:27017/ezloc/users";
        await connect(mongoURI);
        console.log("MongoDB connected");
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error(err);
        }
    }
};
