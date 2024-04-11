require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const AppRouter = require("./router/index");
const errorMiddleware = require("./middleware/error-middleware");
const router = new AppRouter(app);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
