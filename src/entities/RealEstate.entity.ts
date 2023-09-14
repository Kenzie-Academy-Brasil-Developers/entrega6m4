import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Category from "./Category.entity";
import Address from "./Address.entity";

@Entity("realEstates")
export default class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column()
  size: number;

  @Column({ default: false })
  sold: boolean;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToOne(() => Address, { nullable: false })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, { nullable: false })
  category: Category;
}
