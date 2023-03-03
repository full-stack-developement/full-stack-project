import { Router } from "express";
import { mailerController } from "../controllers/mailer.controller";

const resetPasswordRoute = Router();
const routeName = "/mail";

resetPasswordRoute.post(routeName, mailerController);

export default resetPasswordRoute;
