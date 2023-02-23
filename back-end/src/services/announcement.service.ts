import AppDataSource from "../data-source";
import { Announcement } from "../entities/announcement";
import { IAnnouncement } from "../interfaces/announcement.inteface";

const announcementRepository = AppDataSource.getRepository(Announcement);

export async function announcementPostService(data: IAnnouncement) {
  const announcementInstance = announcementRepository.create(data);
  const announcement = await announcementRepository.save(announcementInstance);
  return announcement;
}

export const announcementsListService = async (): Promise<Announcement[]> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcements = announcementRepository.find();

  return announcements;
};

export const announcementDeleteService = async (id: string): Promise<void> => {
  try {
    const announcementRepository = AppDataSource.getRepository(Announcement)
    const findAnnouncement = await announcementRepository.findOneBy({
        id
    })
        
    if(!findAnnouncement){
        throw new Error('Announcement not found') //404
    }

    await announcementRepository.remove(findAnnouncement)
    
  } catch (error) {
    throw new Error(error)
  };
}

export const announcementListEspecificService = async (id: string) => {
  try {
    const announcementsRepository = AppDataSource.getRepository(Announcement);

  const announcement= await announcementsRepository.findOneBy({ id });

  if (!announcement) {
    throw new Error("Announcement is not found"); //400
  }

  return announcement;

  } catch (error) {
    throw new Error(error)
  }
};