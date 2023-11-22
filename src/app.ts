import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { env, loadEnv } from "./utils/env";
import announcementRouter from "./routes/announcement";
import { errorHandler } from "./controllers/error";
import examRouter from "./routes/exam";
import authRouter from "./routes/auth";
loadEnv();

const mongodbUri = env.MONGO_ATLAS_URI;

const app = express();

// headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());

app.use("/announcements", announcementRouter);
app.use("/exams", examRouter);
app.use("/auth", authRouter);

app.use(errorHandler);

mongoose
  .connect(mongodbUri)
  .then(() => app.listen(8080))
  .catch((err) => console.log(err));
