import { Schema, model } from 'mongoose';
import { IAnnouncement } from '../types/types';

const announcementSchema = new Schema<IAnnouncement>(
  {
    announcer: { type: String, required: true },
    department: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

export const Announcement = model('Announcement', announcementSchema);
