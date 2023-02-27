import { Router } from "express";
import { userDeleteController } from "../controllers/user.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";

const userRoute = Router();
const routeName = "/user";

userRoute.delete(routeName,AuthTokenCheck,userDeleteController)

export default userRoute;
