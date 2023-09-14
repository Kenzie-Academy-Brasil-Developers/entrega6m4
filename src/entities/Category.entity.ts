import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./RealEstate.entity";

@Entity("categories")
export default class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true, length: 45 })
  name: string;

  @OneToMany(() => RealEstate, (re) => re.category)
  realEstate: RealEstate;
}
