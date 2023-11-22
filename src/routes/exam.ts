import { Router } from "express";

import {
  createExam,
  deleteExam,
  editExam,
  getExam,
  getExams,
} from "../controllers/exam";
import { examValidation } from "../validation/validation";
import { isAuth } from "../middleware/isAuth";

const examRouter = Router();

// if we need authorization for these actions
// examRouter.use(isAuth)

examRouter.get("", getExams);
examRouter.get("/:id", getExam);
examRouter.post("",examValidation, createExam);
examRouter.put("/:id",examValidation, editExam);
examRouter.delete("/:id", deleteExam);

export default examRouter;
