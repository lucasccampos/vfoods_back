import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RefreshToken {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  userId: number;

  @Column({ unique: true })
  token: string;

  @Column()
  expiryDate: Date;
}
