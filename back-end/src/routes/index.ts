import {Express} from "express"
import app from "../app"
import announcementRoute from "./announcement.route"

function mainRoutes(app : Express){

    app.use(announcementRoute)
    
}

mainRoutes(app)