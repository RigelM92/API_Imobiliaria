import { categoryCreate, categoryRead, categoryReturn } from "../interfaces";
import { Category } from "../entities";
import { categoriesRepository } from "../repositories";
import { categoryReadSchema, categoryReturnSchema } from "../schemas";
import { AppError } from "../errors";

const create = async (payload: categoryCreate): Promise<Category> => {
    const category: Category = categoriesRepository.create(payload);
    await categoriesRepository.save(category);

    return category;
}

const read = async (): Promise<categoryRead> => {
    return categoryReadSchema.parse(await categoriesRepository.find());
};

const retrieve = async (categoryId: number): Promise<categoryReturn> => {
    const categories = await categoriesRepository.findOne({
        where: {
            id: categoryId,
        },
        relations: {
            realEstate: true,
        },
    })
    
    if (!categories) throw new AppError("Category not found", 404);

    return categoryReturnSchema.parse(categories)
}

export default { create, read, retrieve };