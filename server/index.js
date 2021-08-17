import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors";
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extened: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extened: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
      author: "umityasar",
      message: "hello world",
  })
});

app.use("/posts", postRoutes);





mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
