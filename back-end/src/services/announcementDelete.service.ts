import AppDataSource from '../data-source'
import { Announcement } from '../entities/announcement'
import { AppError } from '../errors/appError'
    
    
const announcementDeleteService = async (id: string): Promise<void> => {
    
    const announcementRepository = AppDataSource.getRepository(Announcement)
    const findAnnouncement = await announcementRepository.findOneBy({
        id
    })
        
    if(!findAnnouncement){
        throw new AppError('Announcement not found', 404 )
    }

    await announcementRepository.remove(findAnnouncement)
        
}
    
export default announcementDeleteService