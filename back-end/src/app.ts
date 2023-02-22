import "reflect-metadata";
import "express-async-errors";
import express from "express";
import announcementRoute from "./routes/announcement.route";
//import userRouter from "./routes/user.routes";
//import handleErrorMiddleware from "./middlewares/handleError.middleware";
import { mainRoutes } from "./routes";

const app = express();
app.use(express.json());

mainRoutes(app);

export default app;
