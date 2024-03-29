const express = require("express");
const dotenv = require("dotenv");
const app = new express();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
dotenv.config();
var cors = require('cors')
connectDB();

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const nhaTuyenDungRoutes = require("./routes/nhatuyendungRoutes");
const ungtuyenvienRoutes = require("./routes/ungTuyenVienRouters");

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);
app.use("/api/tintuyendung", postRoutes);
app.use("/api/nhatuyendung", nhaTuyenDungRoutes);
app.use("/api/ungtuyenvien", ungtuyenvienRoutes);


const PORT = process.env.PORT;
const server = app.listen(
  PORT,
  console.log(`server listening on port ${PORT}`.yellow.bold)
);