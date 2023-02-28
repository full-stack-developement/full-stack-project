import { classToPlain, instanceToPlain } from "class-transformer"
import AppDataSource from "../data-source"
import { User } from "../entities/user"

const userRepository = AppDataSource.getRepository(User)

export async function userDeleteService(id : string){

    const user = await userRepository.findOneBy({id : id})

    if(!user.isActive){
        throw new Error("User already deactivated")
    }

    user.isActive = false

    userRepository.save(user)

}
export async function userListSpecificService(id : string){

    const user = await userRepository.findOneBy({id : id})

    if(!user){
        throw new Error("User not found")
    }

    return instanceToPlain(user)
}