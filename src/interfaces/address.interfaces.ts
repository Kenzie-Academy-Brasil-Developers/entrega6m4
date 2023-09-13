import { z } from "zod";
import { Repository } from "typeorm";
import { addressCreateSchema } from "../schemas";
import { Address } from "../entities";

type AdressCreate = z.infer<typeof addressCreateSchema>;

type AddressRepo = Repository<Address>;

export { AddressRepo, AdressCreate };
