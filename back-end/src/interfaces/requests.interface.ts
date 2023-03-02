import { Request } from "express";
import { IAnnouncement } from "./announcement.interface";
import { IComments, ICommentsSpecificList } from "./comments.interface";
import { ILogin } from "./login.interface";

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
  cpf: string;
  phone: string;
  birthDate: Date;
  description: string;
  password: string;
}

export interface IUserResponse {
  accountType: string;
  full_name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: Date;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserRequest extends Request {
  user_id: string;
}
export interface ILoginRequest extends Request{
  data : ILogin
}

export interface ICommentsRequest extends Request {
  user_id: string;
  data: IComments;
}

export interface ICommentsListRequest extends Request {
  user_id: string;
  data: ICommentsSpecificList;
}

export interface IUserUpdateRequest {
  full_name?: string;
  email?: string;
  cpf?: number;
  phone?: number;
  birthDate?: Date;
  description?: string;
  password?: string;
}