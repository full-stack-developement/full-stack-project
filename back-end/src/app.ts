import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { Router } from "./routes";
//import userRouter from "./routes/user.routes";
//import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

//app.use("/users", userRouter);

//app.use(handleErrorMiddleware);

export default app;
