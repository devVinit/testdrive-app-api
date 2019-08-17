import { Car } from 'src/car/car.dto';

export class Schedule {
  id: string;
  car: Car;
  slot: string;
  personName: string;
  carId: string;
}