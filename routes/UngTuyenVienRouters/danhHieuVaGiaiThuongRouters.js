const express = require("express");
const {
    accessDanhHieuVaGiaiThuong,
    createDanhHieuVaGiaiThuong,
    deleteDanhHieuVaGiaiThuong,
    updateDanhHieuVaGiaiThuong
  } = require("../../controllers/UngTuyenVienControllers/danhHieuVaGiaiThuongControllers")
  const { protect } = require("../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(protect,accessDanhHieuVaGiaiThuong);
router.route("/").post(protect,createDanhHieuVaGiaiThuong);
router.route("/update").put(protect,deleteDanhHieuVaGiaiThuong);
router.route("/").delete(protect,updateDanhHieuVaGiaiThuong);

module.exports = router;

