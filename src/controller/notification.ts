import { Request, Response } from "express";
import { create } from "../services/notification";

export const createNotification = async (req: Request, res: Response) => {
  const result = await create(req.body)
  return res.status(200).json(result);
};