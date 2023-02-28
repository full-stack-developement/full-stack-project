import { Router } from "express";
import {
  userCreateController,
  userDeleteController,
} from "../controllers/user.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";

const userRoute = Router();
const routeName = "/user";

userRoute.post(routeName, userCreateController);
userRoute.delete(routeName, AuthTokenCheck, userDeleteController);

export default userRoute;
