const express = require("express");
const {
    accessHinhAnh,
    createHinhAnh,
    deleteHinhAnh,
    updateHinhAnh
  } = require("../../controllers/TinTuyenDunngControllers/hinhAnhControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessHinhAnh);
router.route("/").post(protect,createHinhAnh);
router.route("/update").put(protect,updateHinhAnh);
router.route("/").delete(protect,deleteHinhAnh);

module.exports = router;

