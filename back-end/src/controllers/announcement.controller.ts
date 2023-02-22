import { Response, Request } from "express";
import { IAnnouncementRequest } from "../interfaces/requests.interface";
import { announcementPostService } from "../services/announcement.service";
import announcementDeleteService from "../services/announcementDelete.service";

export async function announcementPostController(req : IAnnouncementRequest,res : Response){
    const data = req.data

    const response = await announcementPostService(data)

    return res.status(200).json(response)
}

export async function announcementDeleteController(req: Request, res: Response){
    const { id } = req.params;
  
    const announcementDeleted = await announcementDeleteService(id);
    return res.status(204).json({
      message: "Announcement deleted",
    });
    
}