const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const router = require("./routers");
const cors = require("cors");
app.use(cors());

app.use(express.json());
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/", router);

app.listen(8000, () => console.log(`Server is connected`));
