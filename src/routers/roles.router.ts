import express, { Request, Response } from "express";
import * as roleService from "../services/roles.service";
import { Roles, Role } from '../models/role';

export const roleRouter = express.Router();

roleRouter.get("/", async (req: Request, res: Response) => {
    try {
      const items: Roles = await roleService.findAll();
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });

  
  roleRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  if(Number.isNaN(id))
   throw new Error("invalid input");
  try {
    const item: Role = await roleService.find(id);
    res.status(200).send(item);
  } catch (e) {
    res.status(404).send(e.message);
  }
});