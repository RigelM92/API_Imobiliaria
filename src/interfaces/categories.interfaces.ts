import { z } from "zod";
import { categoryCreateSchema, categoryReadSchema, categoryReturnSchema } from "../schemas";

type categoryCreate = z.infer<typeof categoryCreateSchema>;
type categoryRead = z.infer<typeof categoryReadSchema>;
type categoryReturn = z.infer<typeof categoryReturnSchema>

export { categoryCreate, categoryRead, categoryReturn };