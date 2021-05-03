import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./configs/db.js";

dotenv.config();
const app = express();
connectDB();

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Server is on...");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`.yellow
      .bold.underline
  );
});
