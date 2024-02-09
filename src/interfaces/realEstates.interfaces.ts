import { z } from "zod";
import { createRealEstateSchema } from "../schemas";

type realEstateCreate = z.infer<typeof createRealEstateSchema>

export { realEstateCreate };