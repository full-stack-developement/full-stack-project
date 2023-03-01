import { Router } from "express";
import { commentsPostController,commentsUserListController,commentsUserListSpecificController,commentsVehicleListController, commentsVehicleListSpecificController } from "../controllers/comments.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";
import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { commentsSchema } from "../schemas/comments.schema";

const commentsRoute = Router();
const routeName = "/comments"

commentsRoute.post(routeName + "/:id",AuthTokenCheck,schemaValidationMiddleware(commentsSchema),commentsPostController) // id_vehicle
commentsRoute.get(routeName + "/user",AuthTokenCheck,commentsUserListController)
commentsRoute.get(routeName + "/vehicle/:id",AuthTokenCheck,commentsVehicleListController) // id_vehicle
commentsRoute.get(routeName + "/user/:id",AuthTokenCheck,commentsUserListSpecificController) // id_comment
commentsRoute.get(routeName + "/vehicle/:id",AuthTokenCheck,commentsVehicleListSpecificController) // id_comment

export default commentsRoute;
