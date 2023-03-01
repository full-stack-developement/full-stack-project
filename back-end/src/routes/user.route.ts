import { Router } from "express";
import {
  userDeleteController,
  userListSpecificController,
  userCreateController,
  userUpdateController,
} from "../controllers/user.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";

const userRoute = Router();
const routeName = "/user";

userRoute.post(routeName, userCreateController);
userRoute.delete(routeName, AuthTokenCheck, userDeleteController);
userRoute.get(routeName,AuthTokenCheck, userListSpecificController) //
userRoute.patch(routeName  + "/:id", userUpdateController)


export default userRoute;
