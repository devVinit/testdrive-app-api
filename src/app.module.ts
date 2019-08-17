import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CarModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
