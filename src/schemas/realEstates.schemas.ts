import { z } from "zod";
import { addressCreateSchema } from "./index";
import { addressSchema } from "./index";

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.number().default(0),
    size: z.number().positive(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    address: addressSchema,
    categoryId: z.number().positive()
})

const createRealEstateSchema = realEstateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
})
.extend({
    address: addressCreateSchema
});

export {
    realEstateSchema,
    createRealEstateSchema
}