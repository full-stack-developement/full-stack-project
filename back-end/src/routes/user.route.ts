import { Router } from "express";
import { userDeleteController } from "../controllers/user.controller";

const userRoute = Router();
const routeName = "/user";

userRoute.delete(routeName,userDeleteController)

export default userRoute;
