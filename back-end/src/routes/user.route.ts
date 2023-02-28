import { Router } from "express";
import { userDeleteController, userListSpecificController } from "../controllers/user.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";

const userRoute = Router();
const routeName = "/user";

userRoute.delete(routeName,AuthTokenCheck,userDeleteController)
userRoute.get(routeName,AuthTokenCheck,userListSpecificController)

export default userRoute;
