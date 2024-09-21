import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cafe } from '../cafe/cafe.entity';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  isRecommendation: boolean;

  @ManyToOne(() => Cafe, (cafe) => cafe.name)
  cafe: Cafe;
}
