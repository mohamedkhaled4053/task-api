import jwt from "jsonwebtoken";
import { throwError } from "../utils/helper";
import { RequestHandler } from "express";
import { CustomError } from "../types/types";
import { env } from "../utils/env";

export const isAuth: RequestHandler = (req, res, next) => {
  let token = req.get("authorization")?.split(" ")[1];
  if (!token) throwError("not authenticated", 401);

  let decodedToken;
  try {
    decodedToken = jwt.verify(token!, env.JWT_SECRET);
  } catch (error) {
    throwError((error as CustomError).message, 500);
  }
  if (!decodedToken) throwError("not authenticated", 401);
  //@ts-ignore
  req.userId = decodedToken.userId;
  next();
};
