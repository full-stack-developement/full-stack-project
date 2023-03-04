import { Router } from "express";
import {
  resetUserPasswordController,
  sendResetUserPasswordController,
} from "../controllers/password.controller";

const passwordRoute = Router();
const routeName = "/user/password";

passwordRoute.post(routeName, sendResetUserPasswordController);
passwordRoute.patch(routeName + "/:token", resetUserPasswordController);

export default passwordRoute;
