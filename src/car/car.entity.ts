import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('car')
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('text')
  companyName: string;

  @Column('text')
  modelName: string;

  @Column({ name: 'image', length: 2083 })
  image: string;
}
