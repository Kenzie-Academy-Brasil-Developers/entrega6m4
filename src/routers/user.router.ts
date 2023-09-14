import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  userControllers.create
);
userRouter.get(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  userControllers.read
);

userRouter.use("/:id", middlewares.idExists);

userRouter.delete(
  "/:id",
  middlewares.verifyToken,
  middlewares.isAdmin,
  userControllers.destroy
);
