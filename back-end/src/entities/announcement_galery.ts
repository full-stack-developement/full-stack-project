import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Announcement } from "./announcement";

@Entity()
export class AnnouncementGallery{
    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column("varchar")
    image : string

    @ManyToOne(()=> Announcement,(announcement)=> announcement.announcementGallery)
    announcement : Announcement
}