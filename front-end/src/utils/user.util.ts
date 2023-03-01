import { AxiosError } from "axios";
import { FieldValues } from "react-hook-form";
import { apiUser } from "../api";
import { IUserUpdate } from "../interfaces/user.interface";

export async function createUser(data : FieldValues){
    let responseCreate = {data : {} as IUserUpdate,message : "" as "success" | "error"}
    try{
        const response = await apiUser.post("",data)
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
export async function loginUser(data : FieldValues){
    let responseLogin = {data : {} as IUserUpdate,message : "" as "success" | "error"}
    try{
        const response = await apiUser.post("/login",data)
        responseLogin.data = response.data
        responseLogin.message = "success"
        return responseLogin
    }
    catch(err){
        if(err instanceof AxiosError){
            responseLogin.message = "error"
            return responseLogin
        }
    }
}

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