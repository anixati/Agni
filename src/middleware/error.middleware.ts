import HttpException from "../common/exception";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || 500;
  const message = "balarabai.";
  // error.message || "balarabai.";

  response.status(status).send(message);
};