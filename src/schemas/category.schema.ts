import { z } from "zod";

const categorySchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(45),
});

const categoryCreateSchema = categorySchema.omit({ id: true });
const categoryReturnSchema = categoryCreateSchema.array();
const categoryUpdateSchema = categoryCreateSchema.partial();
const categoryReadSchema = categoryReturnSchema.array();

export {
  categorySchema,
  categoryCreateSchema,
  categoryUpdateSchema,
  categoryReadSchema,
  categoryReturnSchema
};
