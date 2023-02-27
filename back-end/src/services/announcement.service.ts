import { QueryFailedError } from "typeorm";
import AppDataSource from "../data-source";
import { Announcement } from "../entities/vehicle";
import { IAnnouncement } from "../interfaces/announcement.interface";

const announcementRepository = AppDataSource.getRepository(Announcement);

export async function announcementPostService(data: IAnnouncement) {
  const announcementInstance = announcementRepository.create(data);
  const announcement = await announcementRepository.save(announcementInstance);
  return announcement;
}

export const announcementsListService = async (): Promise<Announcement[]> => {

  const announcements = announcementRepository.find();

  return announcements;
};

export const announcementDeleteService = async (id: string): Promise<void> => {
  try {
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

export const announcementListSpecificService = async (id: string) => {
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

export const announcementUpdateService = async (id: string,data : IAnnouncement) => {
  try {

  const announcement = await announcementRepository.findOneBy({id : id})

  if (!announcement) {
    throw new Error("Announcement is not found"); //400
  }
  for(const props in data){
    announcement[props] = data[props]
  }

  return await announcementRepository.save(announcement)

  } catch (error) {
    if(error instanceof QueryFailedError){
      throw new Error("Formato de id inválido")
    }
    throw new Error(error)
  }
};