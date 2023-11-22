import { RequestHandler } from "express";
import { IExam } from "../types/types";
import { Exam } from "../models/Exam";
import { validate } from "../validation/validation";
require("../models/Course");

export const getExams: RequestHandler = async (req, res, next) => {
  try {
    let exams = await Exam.find().populate("course");
    res.status(200).json(exams);
  } catch (error) {
    next(error);
  }
};

export const getExam: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  try {
    let exam = await Exam.findById(req.params.id);
    res.status(200).json(exam);
  } catch (error) {
    next(error);
  }
};

export const createExam: RequestHandler<any, any, IExam> = async (
  req,
  res,
  next
) => {
  let { course, dueTo, title, topic, type } = req.body;
  try {
    validate(req);
    let NewExam = new Exam({ course, dueTo, title, topic, type });
    await NewExam.save();
    res.status(201).json(NewExam);
  } catch (error) {
    next(error);
  }
};

export const editExam: RequestHandler<{ id: string }, any, IExam> = async (
  req,
  res,
  next
) => {
  let examID = req.params.id;
  let { course, dueTo, title, topic, type } = req.body;
  try {
    validate(req);
    await Exam.findByIdAndUpdate(examID, {
      course,
      dueTo,
      title,
      topic,
      type,
    });
    res.status(201).json({ message: "exam was edited" });
  } catch (error) {
    next(error);
  }
};

export const deleteExam: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  let examID = req.params.id;
  try {
    await Exam.findByIdAndDelete(examID);
    res.status(200).json({ message: "exam was deleted" });
  } catch (error) {
    next(error);
  }
};
