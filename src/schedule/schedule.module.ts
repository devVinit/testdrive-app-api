import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleEntity } from './schedule.entity';
import { CarEntity } from 'src/car/car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScheduleEntity, CarEntity])],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule { }
