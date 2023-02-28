import { AppError, handleError } from "./../Error/ErrorResponse";
import { IUserCreate } from "./../interfaces/requests.interface";
import { Response, Request } from "express";
import { IUserRequest } from "../interfaces/requests.interface";
import { userCreateService, userDeleteService, userListSpecificService } from "../services/user.service";
import { instanceToPlain } from "class-transformer";

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

    const createdUser = await userCreateService({
      accountType,
      full_name,
      email,
      cpf,
      phone,
      birthDate,
      description,
      password,
    });

    return res.status(201).json(instanceToPlain(createdUser));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    return res.json({ message: "Internal server error" }).status(500);
  }
}

export async function userDeleteController(req : IUserRequest,res : Response){

    try{
        const id = req.user_id
        await userDeleteService(id)
        const message = {"message" : "User has been deactivated"}
        return res.json(message).status(200)
    }
    catch(err){
        if(err instanceof Error){
            return res.json(err.message).status(400)
        }
        return res.json({"message" : "Internal server error"}).status(500)
    }
}
export async function userListSpecificController(req : IUserRequest,res : Response){

    try{
        const id = req.user_id
        const response = await userListSpecificService(id)
        return res.json(response).status(200)
    }
    catch(err){
        if(err instanceof Error){
            return res.json(err.message).status(400)
        }
        return res.json({"message" : "Internal server error"}).status(500)
    }
}
