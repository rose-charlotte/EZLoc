import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";

import { connectDB } from "./config/database";

import { UserRouter } from "./routes/userRouter";
import { logger } from "./logger";
import { RentalRouter } from "./routes/rentalRouter";

connectDB();

const PORT = process.env.PORT;
const app = express();

logger.info(`port: ${PORT}`);

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserRouter);
app.use(RentalRouter);

app.get("/", (req, res) => {
    res.send("hello from the back end");
});

app.listen(PORT, () => logger.info(`serveur lancé sur http://localhost:${PORT}`));
