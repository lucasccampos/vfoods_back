import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Indicator {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  managerId: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('text', { nullable: true })
  unit: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'managerId' })
  manager: User;
}
