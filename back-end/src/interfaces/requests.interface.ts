import { Request } from "express";
import { IAnnouncement } from "./announcement.interface";
import { IComments, ICommentsSpecificList } from "./comments.interface";

export interface ISchemaRequest extends Request {
  data: Object;
}

export interface IAnnouncementRequest extends Request {
  data: IAnnouncement;
}

export interface IUserCreate {
  accountType: "seller" | "buyer";
  full_name: string;
  email: string;
  cpf: number;
  phone: number;
  birthDate: Date;
  description: string;
  password: string;
}

export interface IUserResponse {
  accountType: string;
  full_name: string;
  email: string;
  cpf: number;
  phone: number;
  birthDate: Date;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserRequest extends Request {
  user_id: string;
}
export interface ICommentsRequest extends Request {
  user_id: string;
  data: IComments;
}

export interface ICommentsListRequest extends Request {
  user_id: string;
  data: ICommentsSpecificList;
}
