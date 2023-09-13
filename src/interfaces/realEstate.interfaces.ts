import { z } from "zod";

import { DeepPartial, Repository } from "typeorm";

import { RealEstate } from "../entities";
import {
  realEstateCreateSchema,
  realEstateReadSchema,
  realEstateReturnSchema,
} from "../schemas";

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateRead = z.infer<typeof realEstateReadSchema>;
type RealEstateReturn = z.infer<typeof realEstateReturnSchema>;
type RealEstateUpdate = DeepPartial<RealEstate>;

type RealEstateRepo = Repository<RealEstate>;

export {
  RealEstateCreate,
  RealEstateRead,
  RealEstateReturn,
  RealEstateUpdate,
  RealEstateRepo,
};
