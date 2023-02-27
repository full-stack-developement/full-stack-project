import { QueryFailedError } from "typeorm";
import AppDataSource from "../data-source";
import { Vehicle } from "../entities/vehicle";
import { IAnnouncement } from "../interfaces/announcement.interface";

const vehicleRepository = AppDataSource.getRepository(Vehicle);

export async function announcementPostService(data: IAnnouncement) {
  const announcementInstance = vehicleRepository.create(data);
  const announcement = await vehicleRepository.save(announcementInstance);
  return announcement;
}

export const announcementsListService = async (): Promise<Vehicle[]> => {

  const announcements = vehicleRepository.find();

  return announcements;
};

export const announcementDeleteService = async (id: string): Promise<void> => {
  try {
    const findAnnouncement = await vehicleRepository.findOneBy({
        id
    })
        
    if(!findAnnouncement){
        throw new Error('Announcement not found') //404
    }

    await vehicleRepository.remove(findAnnouncement)
    
  } catch (error) {
    throw new Error(error)
  };
}

export const announcementListSpecificService = async (id: string) => {
  try {

  const announcement= await vehicleRepository.findOneBy({ id });

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

  const announcement = await vehicleRepository.findOneBy({id : id})

  if (!announcement) {
    throw new Error("Announcement is not found"); //400
  }
  for(const props in data){
    announcement[props] = data[props]
  }

  return await vehicleRepository.save(announcement)

  } catch (error) {
    if(error instanceof QueryFailedError){
      throw new Error("Formato de id inválido")
    }
    throw new Error(error)
  }
};