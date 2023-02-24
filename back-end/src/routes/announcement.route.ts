import { Router } from "express";
import {
  announcementDeleteController,
  announcementListSpecificController,
  announcementPostController,
  announcementsListControllers,
  announcementsUpdateController,
} from "../controllers/announcement.controller";
import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { announcementSchema, announcementUpdateSchema } from "../schemas/announcement.schema";

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

announcementRoute.patch(routeName + "/:id",schemaValidationMiddleware(announcementUpdateSchema),announcementsUpdateController)

export default announcementRoute;
