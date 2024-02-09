import { Category, RealEstate, Address } from "../entities";
import { AppError } from "../errors";
import { realEstateCreate } from "../interfaces";
import { addressRepository, categoriesRepository, realEstatesRepository } from "../repositories";
import { createRealEstateSchema } from "../schemas";

const create = async (
    { address, categoryId, ...payload }: realEstateCreate
) => {

    const existingAddress = await addressRepository.findOneBy({
        ...address
    })

    if (existingAddress) {
        throw new AppError("Address already exists", 409);
    }

    const validateAddress = addressRepository.create({
        ...address
    });

    await addressRepository.save(validateAddress);

    const category = await categoriesRepository.findOneBy({
        id: categoryId
    })

    if (!category) {
        throw new AppError("Category not found", 404);
    } 

    const realEstate: RealEstate = realEstatesRepository.create({
        ...payload,
        address: validateAddress,
        category: category
    });

    await realEstatesRepository.save(realEstate);

    return realEstate;
};

export default { create }