import { Router } from "express";
import middlewares from "../middlewares";
import { createRealEstateSchema } from "../schemas";
import { realEstateControllers } from "../controllers";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.isAdmin,
    realEstateControllers.create
);