const express = require("express");
const dotenv = require("dotenv");
const app = new express();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
dotenv.config();

connectDB();

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);
app.use("/api/tintuyendung", postRoutes);


const PORT = process.env.PORT;
const server = app.listen(
  PORT,
  console.log(`server listening on port ${PORT}`.yellow.bold)
);