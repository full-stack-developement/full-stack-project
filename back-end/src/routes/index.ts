import {Express} from "express"
import announcementRoute from "./announcement.route"
import userRoute from "./user.route"

export function mainRoutes(app : Express){

    app.use(announcementRoute)
    app.use(userRoute)
    
}