import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react"
import { IAnnouncement } from "../interfaces/announcement.interface";

interface IAnnouncementContext{
    announcements : IAnnouncement[]
    setAnnouncements : Dispatch<SetStateAction<IAnnouncement[]>>

}
interface IAnnouncementProviderProps{
<<<<<<< HEAD
    children : ReactElement[] | ReactElement
=======
    children : ReactElement
>>>>>>> develop
}

export const AnnouncementContext = createContext({} as IAnnouncementContext)

export function AnnouncementProvider(props : IAnnouncementProviderProps ){

    const [announcements,setAnnouncements] = useState([] as IAnnouncement[])

    return(
        <AnnouncementContext.Provider value={{announcements,setAnnouncements}}>{props.children}</AnnouncementContext.Provider>
    )
}