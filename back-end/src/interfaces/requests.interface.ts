import { Request } from "express";
import { IAnnouncement } from "./announcement.interface";

export interface ISchemaRequest extends Request{
    data : Object
}

export interface IAnnouncementRequest extends Request{
    data : IAnnouncement
}