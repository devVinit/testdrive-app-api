import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from './car.entity';
import { Repository } from 'typeorm';
import { Car } from './car.dto';

@Injectable()
export class CarService {

  constructor(@InjectRepository(CarEntity) private carRepository: Repository<Car>) { }

  async getAllCars() {
    try {
      return await this.carRepository.find();
    } catch (error) {
      return error;
    }
  }

  async getCarByid(id: string) {
    try {
      return await this.carRepository.findOne({ id });
    } catch (error) {
      return error;
    }
  }
}
