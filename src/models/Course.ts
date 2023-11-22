import { Schema, model } from 'mongoose';
import { ICourse } from '../types/types';

const courseSchema = new Schema<ICourse>(
  { title: { type: String, required: true } },
  { timestamps: true },
);

export const Course = model('Course', courseSchema);
