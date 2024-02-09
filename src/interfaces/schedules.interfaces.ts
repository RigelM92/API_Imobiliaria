import { z } from "zod";
import { scheduleCreateSchema, scheduleReadSchema} from "../schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleRead = z.infer<typeof scheduleReadSchema>;

type ScheduleRepo = Repository<Schedule>;

export { ScheduleCreate, ScheduleRead, ScheduleRepo };