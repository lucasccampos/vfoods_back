/* eslint-disable prettier/prettier */
import { Team } from 'src/teams/entities/team.entity';
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
  teamId: number;

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

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'teamId' })
  team: Team;
}
