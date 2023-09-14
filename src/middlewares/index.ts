import { handleError } from "./handleError.middleware";
import { isAdmin } from "./isAdmin.middleware";
import { validateBody } from "./validateBody.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { idExists } from "./idExists.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { uniqueNameCategory } from "./uniqueNameCategory.middleware";
export default {
  handleError,
  isAdmin,
  validateBody,
  uniqueEmail,
  idExists,
  verifyToken,
  uniqueNameCategory,
};
