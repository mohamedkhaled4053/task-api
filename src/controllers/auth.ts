import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { throwError } from "../utils/helper";
import { env } from "../utils/env";
import { User } from "../models/User";

export const login: RequestHandler<
  any,
  any,
  { userName: string; password: string }
> = async (req, res, next) => {
  try {
    let { userName, password } = req.body;

    let user = await User.findOne({ userName });
    if (!user) return throwError("invalid credentials", 401);

    let isRightPassword = await bcrypt.compare(password, user.password);
    if (!isRightPassword) return throwError("invalid credentials", 401);

    let token = jwt.sign({ id: user._id }, env.JWT_SECRET, {
      expiresIn: "3d",
    });
    res
      .status(200)
      .json({
        name: user.name,
        userName: user.userName,
        image: user.image,
        token,
      });
  } catch (error) {
    next(error);
  }
};
