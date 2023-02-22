import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement";

const announcementsListService = async (): Promise<Announcement[]> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcements = announcementRepository.find();

  return announcements;
};

export default announcementsListService;
