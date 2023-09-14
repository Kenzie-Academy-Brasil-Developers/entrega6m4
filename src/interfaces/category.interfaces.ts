import { z } from "zod";
import {
  categoryCreateSchema,
  categoryReadSchema,
  categoryUpdateSchema,
  categoryReturnSchema,
} from "../schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategoryRead = z.infer<typeof categoryReadSchema>;
type CategoryUpdate = z.infer<typeof categoryUpdateSchema>;
type CategoryReturn = z.infer<typeof categoryReturnSchema>;
type CategoryRepo = Repository<Category>;

export {
  CategoryRepo,
  CategoryCreate,
  CategoryRead,
  CategoryUpdate,
  CategoryReturn,
};
