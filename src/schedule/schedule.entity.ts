import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Car } from 'src/car/car.dto';
import { CarEntity } from 'src/car/car.entity';

@Entity('schedule')
export class ScheduleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => CarEntity, car => car.id)
  car: CarEntity;

  @Column()
  slot: string;

  @Column()
  personName: string;
}
