import { Response } from "express";
import { IUserRequest } from "../interfaces/requests.interface";
import { userDeleteService } from "../services/user.service";

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