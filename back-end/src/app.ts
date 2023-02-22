import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { mainRoutes } from "./routes";

const app = express();
app.use(express.json());

mainRoutes(app)

export default app;
