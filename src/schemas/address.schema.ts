import { z } from "zod";

const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.number().positive().int(),
  admin: z.boolean().default(false),
  city: z.string().max(20),
  state: z.string().max(20),
});

const addressCreateSchema = addressSchema.omit({ id: true });

const addressReturnSchema = addressCreateSchema.array();
const addressReadSchema = addressReturnSchema.array();

export {
  addressSchema,
  addressCreateSchema,
  addressReturnSchema,
  addressReadSchema,
};
