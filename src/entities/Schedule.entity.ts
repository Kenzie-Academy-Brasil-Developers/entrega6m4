import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User.entity";
import RealEstate from "./RealEstate.entity";

@Entity("schedules")
export default class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn({ type: "date" })
  date: string;

  @Column()
  hour: string;


  @ManyToOne(() => RealEstate,{ nullable: false })
  realEstate: RealEstate;

  @ManyToOne(() => User,{ nullable: false })
  user: User;

}
