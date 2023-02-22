import AppDataSource from "../data-source";
import { Announcement } from "../entities/announcement";
import { IAnnouncement } from "../interfaces/announcement.inteface";

const announcementRepository = AppDataSource.getRepository(Announcement)

export async function announcementPostService(data : IAnnouncement){

    const announcementInstance = announcementRepository.create(data)
    const announcement = await announcementRepository.save(announcementInstance)
    return announcement
}