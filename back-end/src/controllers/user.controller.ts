import { AppError, ErrorResponse, handleError } from "./../Error/ErrorResponse";
import { ILoginRequest, IUserCreate, IUserUpdateRequest } from "./../interfaces/requests.interface";
import { Response, Request } from "express";
import { IUserRequest } from "../interfaces/requests.interface";
import {
  userCreateService,
  userDeleteService,
  userListSpecificService,
  userLoginService,
  userUpdateService,
} from "../services/user.service";

import { instanceToPlain } from "class-transformer";
import { IAddressUpdate } from "../interfaces/address.interface";

export async function userCreateController(req: Request, res: Response) {
  try {
    const {
      accountType,
      full_name,
      email,
      cpf,
      phone,
      birthDate,
      description,
      password,
    }: IUserCreate = req.body;

    const { address } = req.body;

    const createdUser = await userCreateService(
      {
        accountType,
        full_name,
        email,
        cpf,
        phone,
        birthDate,
        description,
        password,
      },
      address
    );

    return res.status(201).json(instanceToPlain(createdUser));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    return res.json({ message: err.message }).status(500);
  }
}

export async function userDeleteController(req: IUserRequest, res: Response) {
  try {
    const id = req.user_id;
    await userDeleteService(id);
    const message = { message: "User has been deactivated" };
    return res.json(message).status(200);
  } catch (err) {
    if (err instanceof Error) {
      return res.json(err.message).status(400);
    }
    return res.json({ message: "Internal server error" }).status(500);
  }
}
export async function userListSpecificController(
  req: IUserRequest,
  res: Response
) {
  try {
    const id = req.user_id;
    const response = await userListSpecificService(id);
    return res.json(response).status(200);
  } catch (err) {
    if (err instanceof Error) {
      return res.json(err.message).status(400);
    }
    return res.json({ message: "Internal server error" }).status(500);
  }
}
export async function userLoginController(req : ILoginRequest,res : Response){
  try {
    const data = req.data;
    const response = await userLoginService(data)
    return res.json(response).status(200);
  } catch (err) {
    if (err instanceof ErrorResponse) {
      return res.json(err.message).status(err.status_code);
    }
    return res.json({ message: "Internal server error" }).status(500);
  }
}

/*
export async function userUpdateController(req: IUserUpdateRequest, res: Response){
  try {
    const id : string = req.params.id;
  
    const data: IUserUpdateRequest = req.body;

    const dataAdrres: IAddressUpdate = req.body  

    const userUpdated = await userUpdateService(id, data, dataAdrres);
  
    return res.status(200).send(userUpdated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
 };
*/

export const userUpdateController = async (
  req: IUserUpdateRequest,
  res: Response
) => {
  try {
    const { id } = req.params;

    const data = req.data;
    const dataAdrress = req.data.address

    const userUpdated = await userUpdateService(id, data, dataAdrress);

    return res.status(200).send(userUpdated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};