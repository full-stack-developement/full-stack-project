export interface IAnnouncement{
    id : string  
    type : "sale" | "auction"
    vehicleType : "car" | "motorcycle" 
    title : string
    year : string
    km : number
    price : number
    description?: string
    coverImage : string
    isActive : boolean
    user_id : number
}