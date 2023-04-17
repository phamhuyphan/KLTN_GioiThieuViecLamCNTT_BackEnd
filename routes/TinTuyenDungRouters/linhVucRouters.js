const express = require("express");
const {
    accessLinhVuc,
    createLinhVuc,
    deleteLinhVuc,
    updateLinhVuc
  } = require("../../controllers/TinTuyenDunngControllers/linhVucControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessLinhVuc);
router.route("/").post(protect,createLinhVuc);
router.route("/update").put(protect,updateLinhVuc);
router.route("/").delete(protect,deleteLinhVuc);

module.exports = router;

