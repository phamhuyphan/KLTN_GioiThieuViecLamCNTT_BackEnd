const express = require("express");
const {
    accessDanhGia,
    createDanhGia,
    deleteDanhGia,
    updateDanhGia
  } = require("../../controllers/TinTuyenDunngControllers/danhGiaController")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessDanhGia);
router.route("/").post(protect,createDanhGia);
router.route("/update").put(protect,updateDanhGia);
router.route("/").delete(protect,deleteDanhGia);

module.exports = router;
