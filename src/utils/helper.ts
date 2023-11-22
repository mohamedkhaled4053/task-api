import { CustomError } from '../types/types';

export function throwError(message: string, status?: number, data?: string[]) {
  let error = new CustomError(message, status, data);
  throw error;
}
