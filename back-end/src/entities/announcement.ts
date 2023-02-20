import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AnnouncementGallery } from "./announcement_galery";

@Entity()
export class Announcement{
    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column("varchar")
    type : "sale" | "auction"

    @Column("varchar")
    vehicleType : "car" | "motorcycle" 

    @Column("varchar")
    title : string

    @Column("numeric",{precision : 4})
    year : number

    @Column("numeric")
    km : number

    @Column("numeric",{scale : 2,precision : 12})
    price : number

    @Column("varchar",{nullable : true})
    description : string

    @Column("varchar")
    coverImage : string

    @CreateDateColumn({type: "timestamp"})
    created_at : Date

    @UpdateDateColumn({type : "timestamp"})
    updated_at : Date
    
    @Column("boolean",{default : true})
    isActive : boolean

    @OneToMany(()=> AnnouncementGallery,(gallery)=> gallery.announcement)
    announcementGallery: AnnouncementGallery[]

    @Column("int")
    user_id : number
}