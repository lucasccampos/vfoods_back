/* eslint-disable prettier/prettier */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Unique,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;
}
