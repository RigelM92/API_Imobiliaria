import { Router } from "express";
import middlewares from "../middlewares";
import { categoryCreateSchema} from "../schemas";
import { categoriesControllers } from "../controllers";

export const categoryRouter: Router = Router();

categoryRouter.post(
    "",
    middlewares.validateBody(categoryCreateSchema),
    middlewares.uniqueCategory,
    middlewares.verifyToken,
    middlewares.isAdmin,
    categoriesControllers.create
);

categoryRouter.get(
    "",
    categoriesControllers.read
);

categoryRouter.get(
    ":id/realEstate",
    categoriesControllers.retrieve
);