import { Router } from "express";
import {
  userDeleteController,
  userListSpecificController,
  userCreateController,
} from "../controllers/user.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";
import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { userRegisterSchema } from "../schemas/user.schema";

const userRoute = Router();
const routeName = "/user";

userRoute.post(
  routeName,
  schemaValidationMiddleware(userRegisterSchema),
  userCreateController
);
userRoute.delete(routeName, AuthTokenCheck, userDeleteController);
userRoute.get(routeName, AuthTokenCheck, userListSpecificController);

export default userRoute;
