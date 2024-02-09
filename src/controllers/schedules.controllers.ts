import { schedulesServices } from "../services";
import { Request, Response } from "express";
import { Schedule } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = Number(res.locals.decoded.sub)
    const schedule: Schedule = await schedulesServices.create(req.body, userId);
    return res.status(201).json(schedule);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const schedules = await schedulesServices.read();
    return res.status(201).json(schedules);
};

export default { create, read }