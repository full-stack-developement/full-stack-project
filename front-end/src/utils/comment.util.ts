import { AxiosError } from "axios";
import { FieldValues } from "react-hook-form";
import { apiComment } from "../api";
import { IComment } from "../interfaces/comment.interface";

export async function createComment(data : FieldValues,id_vehicle : string){
    let responseCreate = {data : {} as IComment,message : "" as "success" | "error"}
    try{
        const token = localStorage.getItem("$TOKEN")
        const response = await apiComment.post(`/${id_vehicle}`,data,{headers : {Authorization : `Bearer ${token}`}})
        responseCreate.data = response.data
        responseCreate.message = "success"
        return responseCreate
    }
    catch(err){
        if(err instanceof AxiosError){
            responseCreate.message = "error"
            return responseCreate
        }
    }
}
export async function getCommentsVehicle(id_vehicle : string){
    let responseGet = {data : [{} as IComment],message : "" as "success" | "error"}
    try{
        const token = localStorage.getItem("$TOKEN")
        const response = await apiComment.get(`/vehicle/${id_vehicle}`,{headers : {Authorization : `Bearer ${token}`}})
        responseGet.data = response.data
        responseGet.message = "success"
        console.log(response)
        return responseGet
    }
    catch(err){
        if(err instanceof AxiosError){
            responseGet.message = "error"
            return responseGet
        }
    }
}