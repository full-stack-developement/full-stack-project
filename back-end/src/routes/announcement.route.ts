import { Router } from "express";
import { announcementPostController } from "../controllers/announcement.controller";
import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { announcementSchema } from "../schemas/announcement.schema";

const announcementRoute = Router()
const routeName = "/announcement"

announcementRoute.post(routeName,schemaValidationMiddleware(announcementSchema),announcementPostController)

export default announcementRoute