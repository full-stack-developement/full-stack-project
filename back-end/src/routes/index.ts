import {Express} from "express"
import announcementRoute from "./announcement.route"

export function mainRoutes(app : Express){

    app.use(announcementRoute)
    
}