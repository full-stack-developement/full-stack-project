import announcementsListControllers from "../controllers/announcements/announcementsList.controller";
import { Router } from "express";

const announcementRoute = Router();
const routeName = "/announcement";

announcementRoute.get(routeName, announcementsListControllers);

export default announcementRoute;
