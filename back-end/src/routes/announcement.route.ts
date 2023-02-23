import { Router } from "express";
import {
  announcementDeleteController,
  announcementListSpecificController,
  announcementPostController,
  announcementsListControllers,
} from "../controllers/announcement.controller";
import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { announcementSchema } from "../schemas/announcement.schema";

const announcementRoute = Router();
const routeName = "/announcement";

announcementRoute.get(routeName, announcementsListControllers);

announcementRoute.post(
  routeName,
  schemaValidationMiddleware(announcementSchema),
  announcementPostController
);

announcementRoute.delete(routeName + "/:id", announcementDeleteController)

announcementRoute.get(routeName + "/:id", announcementListSpecificController)

export default announcementRoute;
