import { Schema, model } from 'mongoose';
import { IExam } from '../types/types';

const examSchema = new Schema<IExam>(
  {
    title: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    topic: { type: String, required: true },
    dueTo: { type: Date, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true },
);

export const Exam = model('Exam', examSchema);
