/* eslint-disable prettier/prettier */
import { Colaborator } from "src/colaborator/entities/colaborator.entity";
import { Indicator } from "src/indicator/entities/indicator.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";


@Entity()
export class Assign {
    @PrimaryColumn()
    colaboratorId: number;

    @PrimaryColumn()
    indicatorId: number;

    @PrimaryColumn()
    month: number;

    @PrimaryColumn()
    year: number;
  
    @ManyToOne(() => Colaborator)
    @JoinColumn({ name: 'colaboratorId' })
    colaborator: Colaborator;

    @ManyToOne(() => Indicator)
    @JoinColumn({ name: 'indicatorId' })
    indicator: Indicator;

    @Column('double precision')
    weight: number;

    @Column('double precision')
    meta: number;

    @Column('double precision')
    superMeta: number;

    @Column('double precision')
    challenge: number;

    @Column('double precision', { nullable: true })
    result: number;

    @Column("timestamp", { nullable: true })
    resultDate: Date;
}