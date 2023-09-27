import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Unique,
} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
@Unique(['email'])
export class Colaborator {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  id_gestor: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  CEP: string;

  @Column()
  password: string;

  @Column()
  imgURL: string;

  //@Column()
  //numero: string

  @Column()
  dateBirth: Date;
}
