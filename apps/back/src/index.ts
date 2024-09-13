import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";

import { connectDB } from "./config/database";

import { UserRouter } from "./routes/userRouter";

connectDB();

const PORT = process.env.PORT;
const app = express();

console.log(`port: ${PORT}`);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserRouter);

app.get("/", (req, res) => {
    res.send("hello from the back end");
});

app.listen(PORT, () => console.log(`serveur lancé sur http://localhost:${PORT}`));
