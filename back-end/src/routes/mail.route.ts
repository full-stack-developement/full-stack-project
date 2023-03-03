import { Router } from "express";
import { mailerController } from "../controllers/mailer.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";

const emailRoute = Router();
const routeName = "/mail";

emailRoute.post(routeName, mailerController);

export default emailRoute;
