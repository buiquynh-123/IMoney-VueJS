import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import transactionRoute from "./routers/transaction";
import userRouter from "./routers/user";

dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", transactionRoute);
app.use("/api", userRouter);

mongoose.connect(process.env.MONGO_URI);

export const viteNodeApp = app;
