import { Response } from "express";
import { ErrorResponse } from "../Error/ErrorResponse";
import { ICommentsRequest } from "../interfaces/requests.interface";
import { commentsPostService } from "../services/comments.service";

export async function CommentsPostController(req : ICommentsRequest,res : Response){

    try{
        const id_user = req.user_id
        const {vehicle_id} = req.params
        const data = req.data
        const response = await commentsPostService(id_user,vehicle_id,data)
        return res.json(response).status(200)
    }
    catch(err){
        if(err instanceof ErrorResponse){
            return res.json(err.message).status(err.status_code)
        }
        return res.json({"message" : "Internal server error"}).status(500)
    }




}