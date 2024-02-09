import { z } from "zod";
import { sesssionSchema } from "../schemas";

type SessionCreate = z.infer<typeof sesssionSchema>;
type SessionReturn = { token: string };

export { SessionCreate, SessionReturn };