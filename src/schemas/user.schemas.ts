import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

const userCreateSchema = userSchema.omit({
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
const userUpdateSchema = userCreateSchema.partial();

const userReturnSchema = userSchema.omit({ password: true });
const userReadSchema = userReturnSchema.array();

export {
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  userReturnSchema,
  userReadSchema,
};
