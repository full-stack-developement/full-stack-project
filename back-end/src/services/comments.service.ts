import AppDataSource from "../data-source"
import { User } from "../entities/user"
import { Vehicle } from "../entities/vehicle"
import { VehicleComments } from "../entities/vehicle_comments"
import { ErrorResponse } from "../Error/ErrorResponse"
import { IComments, ICommentsSpecificList } from "../interfaces/comments.interface"

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
export async function commentsUserListService(user_id : string){
    const user = await userRepository.findOneBy({id : user_id})

    if(!user){
        throw new ErrorResponse("User not exist",404)
    }
    if(user.comments.length == 0){
        throw new ErrorResponse("User not have comments",400)
    }
}   
export async function commentsUserListSpecificService(user_id : string,data : ICommentsSpecificList){
    const user = await userRepository.findOneBy({id : user_id})

    if(!user){
        throw new ErrorResponse("User not have comments",404)
    }

    if(user.comments.length == 0){
        throw new ErrorResponse("User not have comments",400)
    }
    const comment =  user.comments.find((el)=> el.id == data.comment_id)

    return comment
} 
export async function commentsVehicleListService(vehicle_id : string){
    const vehicle = await vehicleRepository.findOneBy({id : vehicle_id})

    if(!vehicle){
        throw new ErrorResponse("Vehicle not found",404)
    }
    if(vehicle.comments.length == 0){
        throw new ErrorResponse("Vehicle not have comments",400)
    }

    return vehicle.comments
}
export async function commentsVehicleListSpecificService(vehicle_id : string,data : ICommentsSpecificList){
    const vehicle = await vehicleRepository.findOneBy({id : vehicle_id})

    if(!vehicle){
        throw new ErrorResponse("Vehicle not found",404)
    }
    if(vehicle.comments.length == 0){
        throw new ErrorResponse("Vehicle not have comments",400)
    }

    const comment = vehicle.comments.find((el)=> el.id == data.comment_id)

    return comment
}

