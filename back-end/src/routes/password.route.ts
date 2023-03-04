import { Router } from "express";
import {
  resetUserPasswordController,
  sendResetUserPasswordController,
} from "../controllers/password.controller";
import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import {
  resetPasswordSchema,
  sendResetPasswordSchema,
} from "../schemas/password.schema";

const passwordRoute = Router();
const routeName = "/user/password";

passwordRoute.post(
  routeName,
  schemaValidationMiddleware(sendResetPasswordSchema),
  sendResetUserPasswordController
);
passwordRoute.patch(
  routeName + "/:token",
  schemaValidationMiddleware(resetPasswordSchema),
  resetUserPasswordController
);

export default passwordRoute;
