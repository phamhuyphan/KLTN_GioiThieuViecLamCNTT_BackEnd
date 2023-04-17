const express = require("express");
const {
    accessHocVan,
    createHocVan,
    deleteHocVan,
    updateHocVan
  } = require("../../controllers/UngTuyenVienControllers/hocVanControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(protect,accessHocVan);
router.route("/").post(protect,createHocVan);
router.route("/update").put(protect,deleteHocVan);
router.route("/").delete(protect,updateHocVan);

module.exports = router;

