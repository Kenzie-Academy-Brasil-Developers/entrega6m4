import { z } from "zod";
import { addressSchema } from "./address.schema";

const realEstateSchema = z.object({
  id: z.number(),
  value: z
    .string()
    .refine((value) => {
      const parsedValue = parseFloat(value);
      return !isNaN(parsedValue) && parsedValue >= 0;
    })
    .default("0"),
  size: z.number().int().positive(),
  address: addressSchema,
  categoryId: z.number().int().positive(),
  sold: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const realEstateCreateSchema = realEstateSchema.omit({ id: true });

const realEstateReturnSchema = realEstateCreateSchema.array();

const realEstateReadSchema = realEstateReturnSchema.array();

export {
  realEstateSchema,
  realEstateCreateSchema,
  realEstateReturnSchema,
  realEstateReadSchema,
};
