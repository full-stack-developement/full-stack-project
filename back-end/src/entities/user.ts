import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Address } from "./address";
import { Vehicle } from "./vehicle";
import { VehicleComments } from "./vehicle_comments";
import { VehicleGallery } from "./vehicle_gallery";
import { Exclude } from "class-transformer";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  accountType: "seller" | "buyer";

  @Column("varchar")
  full_name: string;

  @Column("varchar")
  email: string;

  @Column("numeric", { precision: 11 })
  cpf: number;

  @Column("numeric", { precision: 10 })
  phone: number;

  @Column("date")
  birthDate: Date;

  @Column("varchar", { nullable: true })
  description: string;

  @Exclude()
  @Column("varchar")
  password : string

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @Column("boolean", { default: true })
  isActive: boolean;

  @OneToOne(() => Address)
  address: Address;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.user)
  vehicles: Vehicle[];

  @OneToMany(() => VehicleComments, (vehicle_comments) => vehicle_comments.user)
  comments: VehicleComments[];
}
