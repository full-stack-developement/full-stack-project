import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user";
import { Vehicle } from "./vehicle";

@Entity()
export class VehicleComments{
    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column("varchar")
    content : string

    @ManyToOne(()=> Vehicle,(vehicle)=> vehicle.comments)
    vehicle : Vehicle

    @ManyToOne(()=> User,(user)=> user.comments)
    user : User
}