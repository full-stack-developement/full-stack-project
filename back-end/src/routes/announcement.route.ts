import { Router } from "express";
import { announcementDeleteController, announcementPostController } from "../controllers/announcement.controller";
import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { announcementSchema } from "../schemas/announcement.schema";

const announcementRoute = Router()
const routeName = "/announcement"
const routeNameId = "/announcement/:id"

announcementRoute.post(routeName,schemaValidationMiddleware(announcementSchema),announcementPostController)
announcementRoute.delete(routeNameId, announcementDeleteController)

export default announcementRoute