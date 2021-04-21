import { Request, Response } from "express";
import { create, findByIds } from "../services/user";

export const createUser = async (req: Request, res: Response) => {
  const result = await create(req.body)
  return res.status(200).json(result);
};


export const getUser = async (req: Request, res: Response) => {
  const result = await findByIds(req.body)
  return res.status(200).json(result);
};
