import { Date, Types } from 'mongoose';

// models interfaces

export interface IUser {
  name: string;
  userName: string;
  password: string;
  image:string
}

export interface IAnnouncement {
  announcer: string;
  department: string;
  content: string;
  image:string
}

export interface IExam {
  title: string;
  course: Types.ObjectId;
  topic: string;
  type: 'quiz' | 'assignment';
  dueTo: Date;
}

export interface ICourse {
  title: string;
}

// custom Error
export class CustomError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public data?: string[],
  ) {
    super(message);
  }
}
