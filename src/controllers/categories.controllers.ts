import { categoriesServices } from "../services";
import { Request, Response } from "express";
import { categoryRead, categoryCreate } from "../interfaces";
import { Category } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
    const category: categoryCreate = await categoriesServices.create(req.body);
    return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const category: categoryRead = await categoriesServices.read();
    return res.status(200).json(category);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id);
    const category = await categoriesServices.retrieve(id);

    return res.status(201).json(category);
}

export default { create, read, retrieve };