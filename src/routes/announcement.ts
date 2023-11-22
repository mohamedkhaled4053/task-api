import { Router } from "express";
import {
  createAnnouncement,
  deleteAnnouncement,
  editAnnouncement,
  getAnnouncements,
} from "../controllers/announcement";
import { isAuth } from "../middleware/isAuth";

const announcementRouter = Router();

// if we need authorization for these actions
// announcementRouter.use(isAuth)

announcementRouter.get("", getAnnouncements);
announcementRouter.post("", createAnnouncement);
announcementRouter.put("/:id", editAnnouncement);
announcementRouter.delete("/:id", deleteAnnouncement);

export default announcementRouter;
