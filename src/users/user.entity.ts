/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Colaborator } from "src/colaborator/entities/colaborator.entity";

@Entity()
@Unique(["email"])
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column("text", { nullable: true })
  description: string;

  @Column("text", { nullable: true })
  imgUrl: string;

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
