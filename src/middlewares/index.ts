import { handleError } from "./handleError.middlewares";
import { idExists } from "./idExists.middlewares";
import { validateBody } from "./validateBody.middlewares";
import { isAdmin } from "./isAdmin.middlewares";
import { verifyToken } from "./verifyToken.middlewares";
import { uniqueEmail } from "./uniqueEmail.middlewares";
import { uniqueCategory } from "./uniqueCategory.middlewares";

export default { handleError, idExists, validateBody, isAdmin, verifyToken, uniqueEmail, uniqueCategory }