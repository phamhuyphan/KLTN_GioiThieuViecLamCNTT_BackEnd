const express = require("express");
const {
    accessDanhGia,
    createDanhGia,
    deleteDanhGia,
    updateDanhGia,
    getAllDanhGiaByIdTinTuyenDung
  } = require("../../controllers/TinTuyenDunngControllers/danhGiaController")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(protect,accessDanhGia);
router.route("/").post(protect,createDanhGia);
router.route("/update").put(protect,updateDanhGia);
router.route("/:tintuyendungId").get(protect,getAllDanhGiaByIdTinTuyenDung);

router.route("/").delete(protect,deleteDanhGia);

module.exports = router;

