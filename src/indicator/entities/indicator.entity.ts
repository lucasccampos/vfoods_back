import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Colaborator } from 'src/colaborator/entities/colaborator.entity';

@Entity()
export class Indicator {
  @PrimaryGeneratedColumn('increment')
  id_indicator: number;
  @ManyToOne(() => Colaborator, (colaborador) => colaborador.id)
  id_colaborador: number;

  @ManyToOne(() => User, (user) => user.id)
  id_gestor: number;

  @Column()
  name: string;

  @Column()
  meta: number;

  @Column()
  supermeta: number;

  @Column()
  desafio: number;

  @Column()
  unidadeMedida: string;

  @Column()
  mes: Date;

  @Column()
  Description: string;
}
