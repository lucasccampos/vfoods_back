import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Colaborator } from 'src/colaborator/entities/colaborator.entity';

@Entity()
export class Indicator {
  @PrimaryGeneratedColumn('increment')
  id_indicator: number;

  @ManyToOne(() => User, (user) => user.id)
  id_gestor: string;

  @Column()
  name: string;

  @Column()
  Description: string;
}
