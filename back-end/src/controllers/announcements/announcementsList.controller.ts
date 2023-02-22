import { Request, Response } from "express";
import announcementsListService from "../../services/announcements/announcementsList.service";

const announcementsListControllers = async (req: Request, res: Response) => {
  const announcementList = await announcementsListService();

  return res.status(200).send(announcementList);
};

export default announcementsListControllers;
