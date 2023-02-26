import { Response, Request } from "express";
import {
  IAnnouncementRequest,
  ISchemaRequest,
} from "../interfaces/requests.interface";
import {
  announcementDeleteService,
  announcementListSpecificService,
  announcementPostService,
  announcementsListService,
  announcementUpdateService,
} from "../services/announcement.service";

export async function announcementPostController(
  req: IAnnouncementRequest,
  res: Response
) {
  const data = req.data;

  const response = await announcementPostService(data);

  return res.status(201).json(response);
}

export const announcementsListControllers = async (
  req: Request,
  res: Response
) => {
  const announcementList = await announcementsListService();

  return res.status(200).send(announcementList);
};

export async function announcementDeleteController(
  req: Request,
  res: Response
) {
  const { id } = req.params;

  const announcementDeleted = await announcementDeleteService(id);
  return res.status(204).json({
    message: "Announcement deleted",
  });
}

export const announcementListSpecificController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id;

    const announcement = await announcementListSpecificService(id);

    return res.json(announcement);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const announcementsUpdateController = async (
  req: IAnnouncementRequest,
  res: Response
) => {
  try {
    const { id } = req.params;

    const data = req.data;

    const announcementUpdated = await announcementUpdateService(id, data);

    return res.status(200).send(announcementUpdated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
