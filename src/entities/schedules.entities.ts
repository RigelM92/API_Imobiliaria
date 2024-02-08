import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entities";
import { RealEstate } from "./realEstates.entities";

@Entity("schedules")
export class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column ({ type: "date" })
    date: Date;

    @Column ({ type: "time" })
    hour: string;

    @ManyToOne(() => User, (u) => u.schedule)
    user: User;

    @ManyToOne(() => RealEstate)
    realEstate: RealEstate;
}