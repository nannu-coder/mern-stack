import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";

import cors from "cors";
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

// db and authenticateUser
import connectDB from "./DB/connect.js";

//Routes
import authRouter from "./Routes/authRoutes.js";
import jobsRouter from "./Routes/jobsRoutes.js";

//Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";
import authentiCateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

// Router Middleware
app.use("/api/auth/", authRouter);
app.use("/api/jobs/", authentiCateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
