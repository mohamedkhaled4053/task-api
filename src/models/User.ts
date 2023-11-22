import { Schema, model } from 'mongoose';
import { IUser } from '../types/types';

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);
