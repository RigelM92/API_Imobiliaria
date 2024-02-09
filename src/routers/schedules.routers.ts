import { Router } from "express";
import middlewares from "../middlewares";
import { schedulesControllers } from "../controllers";
import { scheduleCreateSchema } from "../schemas";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.isAdmin,
    middlewares.validateBody(scheduleCreateSchema),
    schedulesControllers.create
);

scheduleRouter.get(
    "",
    schedulesControllers.read
)