import { Request, Response } from "express";
import { categoryServices } from "../services";
import { CategoryRead, CategoryReturn } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: CategoryReturn = await categoryServices.create(req.body);
  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const categories: CategoryRead = await categoryServices.read();
  return res.status(200).json(categories);
};


export default { create, read };