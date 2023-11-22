import { RequestHandler } from "express";
import { Announcement } from "../models/Announcement";
import { IAnnouncement } from "../types/types";

export const getAnnouncements: RequestHandler = async (req, res, next) => {
  try {
    let announcements = await Announcement.find();
    res.status(200).json(announcements);
  } catch (error) {
    next(error);
  }
};

export const createAnnouncement: RequestHandler<
  any,
  any,
  IAnnouncement
> = async (req, res, next) => {
  let { announcer, content, department } = req.body;
  try {
    let NewAnnouncement = new Announcement({ announcer, content, department });
    await NewAnnouncement.save();
    res.status(201).json(NewAnnouncement);
  } catch (error) {
    next(error);
  }
};

export const editAnnouncement: RequestHandler<
  { id: string },
  any,
  IAnnouncement
> = async (req, res, next) => {
  let announcementID = req.params.id;
  let { announcer, content, department } = req.body;
  try {
    await Announcement.findByIdAndUpdate(announcementID, {
      announcer,
      content,
      department,
    });
    res.status(201).json({ message: "announcement was edited" });
  } catch (error) {
    next(error);
  }
};

export const deleteAnnouncement: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  let announcementID = req.params.id;
  try {
    await Announcement.findByIdAndDelete(announcementID);
    res.status(200).json({ message: "announcement was deleted" });
  } catch (error) {
    next(error);
  }
};
