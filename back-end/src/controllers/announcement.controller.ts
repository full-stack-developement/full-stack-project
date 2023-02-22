import { Response } from "express";
import { IAnnouncementRequest } from "../interfaces/requests.interface";
import { announcementPostService } from "../services/announcement.service";

export async function announcementPostController(req : IAnnouncementRequest,res : Response){
    const data = req.data

    const response = await announcementPostService(data)

    return res.status(200).json(response)
}