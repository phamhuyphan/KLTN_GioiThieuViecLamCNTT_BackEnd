const express = require("express");
const dotenv = require("dotenv");
const app = new express();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
dotenv.config();
const cors = require('cors')
connectDB();

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const nhaTuyenDungRoutes = require("./routes/nhatuyendungRoutes");
const ungtuyenvienRoutes = require("./routes/ungTuyenVienRouters");
const ngonguRoutes = require("./routes/ngonNguRouters");
const nganhngheoutes = require("./routes/TinTuyenDungRouters/nganhNgheRouters");
const donungtuyenRoutes = require("./routes/donUngTuyenRouters");
const danhgiaRoutes = require("./routes/TinTuyenDungRouters/danhGiaRouters");
const yeuThichRoutes = require("./routes/yeuThichRouters");

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
app.use("/api/tintuyendung", postRoutes);
app.use("/api/nhatuyendung", nhaTuyenDungRoutes);
app.use("/api/ungtuyenvien", ungtuyenvienRoutes);
app.use("/api/ngonngu",ngonguRoutes);
app.use("/api/nganhnghe",nganhngheoutes);
app.use("/api/donungtuyen",donungtuyenRoutes);
app.use("/api/danhgia",danhgiaRoutes);
app.use("/api/yeuthich",yeuThichRoutes);

const PORT = process.env.PORT;
const server = app.listen(
  PORT,
  console.log(`server listening on port ${PORT}`.yellow.bold)
);