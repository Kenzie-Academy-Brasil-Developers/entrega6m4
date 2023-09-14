import { CategoryCreate, CategoryRead, CategoryReturn } from "../interfaces";
import { Category } from "../entities";
import { categoryRepository } from "../repositories";
import { categoryReadSchema, categoryReturnSchema } from "../schemas";

const create = async (payload: CategoryCreate): Promise<CategoryReturn> => {
  const category: Category = categoryRepository.create(payload);
  await categoryRepository.save(category);

  return categoryReturnSchema.parse(category);
};

const read = async (): Promise<CategoryRead> => {
  return categoryReadSchema.parse(await categoryRepository.find());
};

const destroy = async (category: Category): Promise<void> => {
  await categoryRepository.softRemove(category);
};

export default { create, read, destroy };