import Exception from "../common/exception";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: Exception,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const code = error.statusCode || 500;
  const message = "balarabai.";
  // error.message || "balarabai.";

  response.status(code).json({
    status:"Error",
    statusCode:code,
    message:message
  });
};