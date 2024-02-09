import { z } from "zod";
import { createRealEstateSchema } from "./realEstates.schemas"

const categorySchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),  
})

const categoryCreateSchema = categorySchema.omit({ id: true });

const categoryReadSchema = categorySchema.array();

const categoryReturnSchema = categorySchema.omit({
    id: true,
    name: true,
}).extend({
    realEstates: createRealEstateSchema.array(),
});

export {
    categorySchema,
    categoryCreateSchema,
    categoryReadSchema,
    categoryReturnSchema
};