import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import * as moment from 'moment';
import { Schedule } from './schedule.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {

  constructor(private scheduleService: ScheduleService) { }

  @Get(':id')
  async getScheduleByCarId(@Param('id', new ParseIntPipe()) id: string) {
    const schedules = await this.scheduleService.getScheduleByCarId(id);
    const schedulesMap: Map<string, Schedule> = new Map(schedules.map(schedule => ([schedule.slot, schedule])));
    const slotTime = new Date();
    const currentTime = new Date();

    slotTime.setHours(0);
    slotTime.setMinutes(0);
    slotTime.setSeconds(0);
    slotTime.setMilliseconds(0);

    const timeSlots = [];

    for (let i = 0; i < 48; i++) {
      const slot = {
        isPassed: currentTime >= slotTime,
        isBooked: schedulesMap.get(moment(slotTime).format('HH:mm').toString()) ? true : false,
        time: moment(slotTime).format('HH:mm').toString(),
      };

      timeSlots.push(slot);
      slotTime.setMinutes(slotTime.getMinutes() + 30);
    }
    return timeSlots;
  }

  @Post()
  createSchedule(@Body() schedule: Schedule) {
    return this.scheduleService.createSchedule(schedule);
  }
}
