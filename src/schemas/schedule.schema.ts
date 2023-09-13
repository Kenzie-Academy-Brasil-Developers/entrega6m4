import { z } from "zod";

function validateHourFormat(value: string): boolean {
  return /^\d{2}:\d{2}$/.test(value);
}

const scheduleSchema = z.object({
  id: z.number().positive().int(),
  date: z.date(),
  hour: z.string().refine(validateHourFormat, {
    message: "A hora deve estar no formato 'HH:MM'",
  }),
  realEstateId: z.number().positive(),
  userId: z.number().positive(),
});

const scheduleCreateSchema = scheduleSchema.omit({ id: true });

const scheduleReturnSchema = scheduleCreateSchema.array();

const scheduleReadSchema = scheduleReturnSchema.array();
export {
  scheduleSchema,
  scheduleCreateSchema,
  scheduleReadSchema,
  scheduleReturnSchema,
};
