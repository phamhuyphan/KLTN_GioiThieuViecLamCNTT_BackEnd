const express = require("express");
const {
    accessChungChi,
    createChungChi,
    deleteChungChi,
    updateChungChi
  } = require("../../controllers/UngTuyenVienControllers/chungChiControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(protect,accessChungChi);
router.route("/").post(protect,createChungChi);
router.route("/update").put(protect,deleteChungChi);
router.route("/").delete(protect,updateChungChi);

module.exports = router;

