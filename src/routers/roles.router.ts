import express, { Request, Response, NextFunction } from "express";
import * as roleService from "../services/roles.service";
import { Roles, Role } from '../models/role';
import Exception from '../common/exception';
import asyncHandler = require('express-async-handler');

export const roleRouter = express.Router();

roleRouter.get("/", asyncHandler(async (req: Request, res: Response) => {
    try {
      const items: Roles = await roleService.findAll();
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }));

  
  roleRouter.get("/:id", asyncHandler(async (req: Request, res: Response,next:NextFunction) => {
  const id: number = parseInt(req.params.id, 10);
  if(Number.isNaN(id))
   throw new Exception("invalid input");
  try {
    const item: Role = await roleService.find(id);
    res.status(200).send(item);
  } catch (e) {
    res.status(404).send(e.message);
  }
}));