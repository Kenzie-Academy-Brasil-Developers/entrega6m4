import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { scheduleCreateSchema, scheduleReadSchema, scheduleReturnSchema } from "../schemas/schedule.schema";
import { Schedule } from "../entities";


type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleRead = z.infer<typeof scheduleReadSchema>;
type ScheduleReturn = z.infer<typeof scheduleReturnSchema>;
type ScheduleUpdate = DeepPartial<Schedule>;

type ScheduleRepo = Repository<Schedule>;

export { ScheduleCreate, ScheduleRead, ScheduleReturn, ScheduleUpdate, ScheduleRepo };