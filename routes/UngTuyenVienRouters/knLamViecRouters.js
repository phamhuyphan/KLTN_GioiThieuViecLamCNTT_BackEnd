const express = require("express");
const {
    accessKinhNghiemLamViec,
    createKinhNghiemLamViec,
    deleteKinhNghiemLamViec,
    updateKinhNghiemLamViec
  } = require("../../controllers/UngTuyenVienControllers/knLamViecControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(protect,accessKinhNghiemLamViec);
router.route("/").post(protect,createKinhNghiemLamViec);
router.route("/update").put(protect,deleteKinhNghiemLamViec);
router.route("/").delete(protect,updateKinhNghiemLamViec);

module.exports = router;

