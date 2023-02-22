import "reflect-metadata";
import "express-async-errors";
import express from "express";
import announcementRoute from "./routes/announcement.route";
//import userRouter from "./routes/user.routes";
//import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

//app.use("/users", userRouter);
app.use("", announcementRoute);
//app.use(handleErrorMiddleware);

export default app;
