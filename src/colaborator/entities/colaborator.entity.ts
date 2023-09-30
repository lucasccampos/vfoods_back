/* eslint-disable prettier/prettier */
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class Colaborator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  managerId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cellphone: string;

  @Column()
  imgURL: string;

  @Column('timestamp')
  dateBirth: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'managerId' })
  manager: User;
}
