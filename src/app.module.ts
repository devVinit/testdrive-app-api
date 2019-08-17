import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CarModule,
    ScheduleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
