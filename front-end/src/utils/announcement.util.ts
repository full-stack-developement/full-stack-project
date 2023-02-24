import { AxiosError } from "axios";
import { FieldValues } from "react-hook-form";
import { apiAnnouncement } from "../api";
import { IAnnouncement } from "../interfaces/announcement.interface";
import { sellerMocked } from "../mocks/user.mock";

export async function createAnnouncement(data : FieldValues ){
    let responseCreate = {data : {} as IAnnouncement,message : "" as "success" | "error"}
    try{
        data.user_id = sellerMocked.user_id
        const response = await apiAnnouncement.post("",data)
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
export async function getSpecificAnnouncement(id : string){
    let responseSpecificGet = {data : {} as IAnnouncement,message : "" as "success" | "error"}
    try{
        const response = await apiAnnouncement.get(`/${id}`)
        responseSpecificGet.data = response.data
        responseSpecificGet.message = "success"
        return responseSpecificGet
    }
    catch(err){
        if(err instanceof AxiosError){
            responseSpecificGet.message = "error"
            return responseSpecificGet
        }
    }
}
export async function updateAnnouncement(data : FieldValues,id : string){
    let responseUpdate = {data : {} as IAnnouncement,message : "" as "success" | "error"}
    try{
        let validatedData = {} as FieldValues
        for (const key in data){
            if(data[key]){
                validatedData[key] = data[key]
            }
        }
        const response = await apiAnnouncement.patch(`/${id}`,validatedData)
        responseUpdate.data = response.data
        responseUpdate.message = "success"
        return responseUpdate
    }
    catch(err){
        if(err instanceof AxiosError){
            responseUpdate.message = "error"
            return responseUpdate
        }
    }
}
export async function deleteAnnouncement(id : string){
    let responseDelete = {message : "" as "success" | "error"}
    try{
        const response = await apiAnnouncement.delete(`/${id}`)
        responseDelete.message = "success"
        return responseDelete
    }
    catch(err){
        if(err instanceof AxiosError){
            responseDelete.message = "error"
            return responseDelete
        }
    }
}