import express from "express";
import dotenv from "dotenv";
import path from "path";
import { router } from "./routes";

export const app = express();

dotenv.config({ path: path.resolve(__dirname, "../.env") });

app.set("port", process.env.PORT || 5000);
app.use(express.json());
app.use(router);
