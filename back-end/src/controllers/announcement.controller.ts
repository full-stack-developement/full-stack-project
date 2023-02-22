import { Response, Request } from "express";
import { IAnnouncementRequest } from "../interfaces/requests.interface";
import {
  announcementPostService,
  announcementsListService,
} from "../services/announcement.service";

export async function announcementPostController(
  req: IAnnouncementRequest,
  res: Response
) {
  const data = req.data;

  const response = await announcementPostService(data);

  return res.status(200).json(response);
}

export const announcementsListControllers = async (
  req: Request,
  res: Response
) => {
  const announcementList = await announcementsListService();

  return res.status(200).send(announcementList);
};
