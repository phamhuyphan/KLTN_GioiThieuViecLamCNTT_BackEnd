const express = require("express");
const {
    accessThongTinLienHe,
    createThongTinLienHe,
    deleteThongTinLienHe,
    updateThongTinLienHe
  } = require("../../controllers/TinTuyenDunngControllers/thongTinLienHeControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessThongTinLienHe);
router.route("/").post(protect,createThongTinLienHe);
router.route("/update").put(protect,updateThongTinLienHe);
router.route("/").delete(protect,deleteThongTinLienHe);

module.exports = router;

