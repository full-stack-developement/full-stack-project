import { Router } from "express";
import { CommentsPostController } from "../controllers/comments.controller";
import { AuthTokenCheck } from "../middlewares/auth.middleware";
import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { commentsSchema } from "../schemas/comments.schema";

const commentsRoute = Router();
const routeName = "/user/comments/:id" // vehicle_id

commentsRoute.post(routeName,AuthTokenCheck,schemaValidationMiddleware(commentsSchema),CommentsPostController)


export default commentsRoute;
