const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log(err));

  app.use(express.json())

  app.use("/api/pins", pinRoute);
  app.use("/api/users", userRoute);


app.listen(8800, () => {
  console.log("backend server is running");
});
