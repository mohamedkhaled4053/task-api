import { ErrorRequestHandler } from 'express';
import { CustomError } from '../types/types';

export const errorHandler: ErrorRequestHandler = (
  error: CustomError,
  req,
  res,
  next,
) => {
  console.log(error);
  res
    .status(error.statusCode || 500)
    .json({ message: error.message, data: error.data });
};
