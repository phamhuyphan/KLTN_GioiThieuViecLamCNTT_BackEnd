const express = require("express");
const {
    accessLienHe,
    createLienHe,
    deleteLienHe,
    updateLienHe
  } = require("../../controllers/TinTuyenDunngControllers/lienHeControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessLienHe);
router.route("/").post(protect,createLienHe);
router.route("/update").put(protect,updateLienHe);
router.route("/").delete(protect,deleteLienHe);

module.exports = router;

