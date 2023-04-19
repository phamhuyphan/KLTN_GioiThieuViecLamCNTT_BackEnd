const express = require("express");
const {
    accessHocVan,
    createHocVan,
    deleteHocVan,
    updateHocVan
  } = require("../../controllers/UngTuyenVienControllers/hocVanControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/:ungtuyenvienId").get(protect,accessHocVan);
router.route("/").post(protect,createHocVan);
router.route("/:ungtuyenvienId/update/hocVanId").put(protect,updateHocVan);
router.route("/").delete(protect,deleteHocVan);

module.exports = router;

