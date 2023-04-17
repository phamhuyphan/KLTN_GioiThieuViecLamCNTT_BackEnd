const express = require("express");
const {
    accessDonUngTuyen,
    createDonUngTuyen,
    deleteDonUngTuyen,
    updateDonUngTuyen
  } = require("../../controllers/TinTuyenDunngControllers/donUngTuyenControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessDonUngTuyen);
router.route("/").post(protect,createDonUngTuyen);
router.route("/update").put(protect,updateDonUngTuyen);
router.route("/").delete(protect,deleteDonUngTuyen);

module.exports = router;

