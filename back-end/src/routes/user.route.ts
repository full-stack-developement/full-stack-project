import { Router } from "express";
import {
  userCreateController,
  userDeleteController,
  userUpdateController,
} from "../controllers/user.controller";
import { userListSpecificController } from "../controllers/user.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";

const userRoute = Router();
const routeName = "/user";

userRoute.post(routeName, userCreateController);
userRoute.delete(routeName, AuthTokenCheck, userDeleteController);
userRoute.get(routeName,userListSpecificController) //AuthTokenCheck
userRoute.patch(routeName  + "/:id", userUpdateController)

export default userRoute;
