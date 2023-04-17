const express = require("express");
const {
    accessDiaDiem,
    createDiaDiem,
    deleteDiaDiem,
    updateDiaDiem
  } = require("../../controllers/TinTuyenDunngControllers/diaDiemControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessDiaDiem);
router.route("/").post(protect,createDiaDiem);
router.route("/update").put(protect,updateDiaDiem);
router.route("/").delete(protect,deleteDiaDiem);

module.exports = router;

