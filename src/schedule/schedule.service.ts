import { Injectable, HttpException, NotFoundException } from '@nestjs/common';
import { Schedule } from './schedule.dto';
import { ScheduleEntity } from './schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarEntity } from 'src/car/car.entity';
import { Car } from 'src/car/car.dto';

@Injectable()
export class ScheduleService {

  constructor(
    @InjectRepository(ScheduleEntity) private scheduleRepository: Repository<Schedule>,
    @InjectRepository(CarEntity) private carRepository: Repository<Car>,
  ) { }

  async getScheduleByCarId(id: string) {
    const schedules = await this.scheduleRepository.find({ where: { car: id } });
    return schedules;
  }

  async createSchedule(data: Schedule) {
    const car = await this.carRepository.findOne({ where: { id: data.carId } });
    if (!car) {
      return new NotFoundException();
    };

    const schedule = await this.scheduleRepository.create({ ...data, car });

    return await this.scheduleRepository.save(schedule);
  }
}
