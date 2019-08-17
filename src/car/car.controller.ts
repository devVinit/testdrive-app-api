import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {

  constructor(public carService: CarService) { }

  @Get()
  async getAllCars() {
    const cars = await this.carService.getAllCars();
    return cars;
  }

  @Get(':id')
  async getCarById(@Param('id', new ParseIntPipe()) id: string) {
    return await this.carService.getCarByid(id);
  }
}
