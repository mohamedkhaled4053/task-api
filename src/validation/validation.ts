import { check, validationResult } from "express-validator";
import { Request } from "express";
import { throwError } from "../utils/helper";

export const examValidation = [
  check("title").trim().notEmpty().withMessage("title is required"),
  check("course").isMongoId().withMessage("course Id is not valid"),
  check("topic").trim().notEmpty().withMessage("topic is required"),
  check("type").isIn(["quiz", "assignment"]).withMessage("type is not valid"),
  check("dueTo").isDate().withMessage("due-to should be a valid date"),
];

export const validate = (req: Request) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    let msgs: string[] = errors.array().map((err) => err.msg);
    throwError("validation failed", 422, msgs);
  }
};
