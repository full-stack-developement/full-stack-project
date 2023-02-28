import AppDataSource from "../data-source"
import { User } from "../entities/user"
import { Vehicle } from "../entities/vehicle"
import { VehicleComments } from "../entities/vehicle_comments"
import { ErrorResponse } from "../Error/ErrorResponse"
import { IComments } from "../interfaces/comments.interface"

const commentsRepository = AppDataSource.getRepository(VehicleComments)
const userRepository = AppDataSource.getRepository(User)
const vehicleRepository = AppDataSource.getRepository(Vehicle)

export async function commentsPostService(user_id : string,vehicle_id : string,data : IComments){
    const user = await userRepository.findOneBy({id : user_id})
    const vehicle = await vehicleRepository.findOneBy({id : vehicle_id})

    if(!user){
        throw new ErrorResponse("User not found",404)
    }
    if(!vehicle){
        throw new ErrorResponse("Vehicle not found",404)
    }

    const commentInstance = new VehicleComments()

    commentInstance.content = data.content
    commentInstance.user = user
    commentInstance.vehicle = vehicle

    return commentsRepository.save(commentInstance)

}   