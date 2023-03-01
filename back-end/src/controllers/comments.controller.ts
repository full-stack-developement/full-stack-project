import { Response } from "express";
import { ErrorResponse } from "../Error/ErrorResponse";
import { ICommentsSpecificList } from "../interfaces/comments.interface";
import { ICommentsListRequest, ICommentsRequest } from "../interfaces/requests.interface";
import { commentsPostService, commentsUserListService, commentsUserListSpecificService, commentsVehicleListService, commentsVehicleListSpecificService } from "../services/comments.service";

export async function commentsPostController(req : ICommentsRequest,res : Response){

    try{
        const user_id = req.user_id
        const {id} = req.params
        const data = req.data
        const response = await commentsPostService(user_id,id,data)
        return res.json(response).status(200)
    }
    catch(err){
        if(err instanceof ErrorResponse){
            return res.json(err.message).status(err.status_code)
        }
        return res.json({"message" : "Internal server error"}).status(500)
    }
}
export async function commentsUserListController(req : ICommentsRequest,res : Response){

    try{
        const user_id = req.user_id
        const response = await commentsUserListService(user_id)
        return res.json(response).status(200)
    }
    catch(err){
        if(err instanceof ErrorResponse){
            return res.json(err.message).status(err.status_code)
        }
        return res.json({"message" : "Internal server error"}).status(500)
    }
}
export async function commentsUserListSpecificController(req : ICommentsListRequest,res : Response){

    try{
        const user_id = req.user_id
        const data = req.data
        const response = await commentsUserListSpecificService(user_id,data)
        return res.json(response).status(200)
    }
    catch(err){
        if(err instanceof ErrorResponse){
            return res.json(err.message).status(err.status_code)
        }
        return res.json({"message" : "Internal server error"}).status(500)
    }
}
export async function commentsVehicleListController(req : ICommentsRequest,res : Response){

    try{
        const {id} = req.params
        const response = await commentsVehicleListService(id)
        return res.json(response).status(200)
    }
    catch(err){
        if(err instanceof ErrorResponse){
            return res.json(err.message).status(err.status_code)
        }
        return res.json({"message" : "Internal server error"}).status(500)
    }
}
export async function commentsVehicleListSpecificController(req : ICommentsListRequest,res : Response){

    try{
        const {id} = req.params
        const data = req.data
        const response = await commentsVehicleListSpecificService(id,data)
        return res.json(response).status(200)
    }
    catch(err){
        if(err instanceof ErrorResponse){
            return res.json(err.message).status(err.status_code)
        }
        return res.json({"message" : "Internal server error"}).status(500)
    }
}