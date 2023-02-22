import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { mainRoutes } from "./routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors())

mainRoutes(app)

export default app;
