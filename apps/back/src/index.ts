import dotenv from "dotenv";
import express from "express";
import cors from "cors";
//import { connectDB } from "../config/database";

dotenv.config();

import { UserRouter } from "./routes/userRouter";

const PORT = process.env.PORT;

const app = express();

console.log(`port: ${PORT}`);

app.use(cors());

app.use(express.json());

app.use(UserRouter);

app.listen(PORT, () => console.log(`serveur lancé sur http://localhost:${PORT}`));
