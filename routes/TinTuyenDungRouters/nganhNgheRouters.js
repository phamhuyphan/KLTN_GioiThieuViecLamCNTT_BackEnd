const express = require("express");
const {
    accessNganhNghe,
    createNganhNghe,
    deleteNganhNghe,
    updateNganhNghe
  } = require("../../controllers/TinTuyenDunngControllers/nganhNgheControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessNganhNghe);
router.route("/").post(protect,createNganhNghe);
router.route("/update").put(protect,updateNganhNghe);
router.route("/:nganhNgheId").delete(protect,deleteNganhNghe);

module.exports = router;

