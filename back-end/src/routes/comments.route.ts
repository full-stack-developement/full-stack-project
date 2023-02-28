import { Router } from "express";
import { commentsPostController,commentsUserListController,commentsVehicleListController } from "../controllers/comments.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";
import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { commentsSchema } from "../schemas/comments.schema";

const commentsRoute = Router();
const routeName = "/user/comments"

commentsRoute.post(routeName + "/:id",AuthTokenCheck,schemaValidationMiddleware(commentsSchema),commentsPostController)
commentsRoute.get(routeName,AuthTokenCheck,commentsUserListController)
commentsRoute.get(routeName + "/:id",AuthTokenCheck,commentsVehicleListController)

export default commentsRoute;
