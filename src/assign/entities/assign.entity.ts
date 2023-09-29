/* eslint-disable prettier/prettier */
import { Colaborator } from "src/colaborator/entities/colaborator.entity";
import { Indicator } from "src/indicator/entities/indicator.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";


@Entity()
export class Assign {
    @PrimaryColumn()
    id_colaborator: number;

    @PrimaryColumn()
    id_indicator: number;

    @PrimaryColumn()
    month: number;

    @PrimaryColumn()
    year: number;
  
    @ManyToOne(() => Colaborator)
    @JoinColumn({ name: 'id_colaborator' })
    colaborator: Colaborator;

    @ManyToOne(() => Indicator)
    @JoinColumn({ name: 'id_indicator' })
    indicator: Indicator;

    @Column()
    weight: number;

    @Column()
    meta: number;

    @Column()
    super_meta: number;

    @Column()
    challenge: number;

    @Column("int", { nullable: true })
    result: number;

    @Column("timestamp", { nullable: true })
    result_date: Date;
}