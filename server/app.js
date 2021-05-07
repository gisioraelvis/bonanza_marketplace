import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./configs/db.js";

import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

import { notFound, errorHandler } from "./middleWares/errorHandlers.js";

dotenv.config();
const app = express();
connectDB();

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/", (req, res) => {
  res.sendStatus(200);
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`.yellow
      .bold.underline
  );
});
