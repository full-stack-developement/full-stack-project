import { AxiosError } from "axios";
import { FieldValues } from "react-hook-form";
import { apiAnnouncement, apiUser } from "../api";
import { IUserUpdate } from "../interfaces/user.interface";


export async function updateUser(data : FieldValues,id : string){
    let responseUpdate = {data : {} as IUserUpdate,message : "" as "success" | "error"}
    try{
        let validatedData = {} as FieldValues
        for (const key in data){
            if(data[key]){
                validatedData[key] = data[key]
            }
        }
        const response = await apiUser.patch(`/${id}`,validatedData)
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