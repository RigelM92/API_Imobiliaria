import { ScheduleCreate, ScheduleRead} from "../interfaces";
import { Schedule } from "../entities";
import { schedulesRepository } from "../repositories";
import { scheduleReadSchema } from "../schemas";

const create = async (payload: ScheduleCreate, userId: number): Promise<Schedule> => {
    const schedule: Schedule = schedulesRepository.create(payload);
    await schedulesRepository.save(schedule)

    return schedule;
}

const read = async (): Promise<ScheduleRead> => {
    return scheduleReadSchema.parse(await schedulesRepository.find());
};

export default { create, read }