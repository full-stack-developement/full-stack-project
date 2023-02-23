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