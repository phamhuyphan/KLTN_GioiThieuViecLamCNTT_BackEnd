const express = require("express");
const {
    accessNhaTuyenDung,
    createNhaTuyenDung,
    deleteNhaTuyenDung,
    updateNhaTuyenDung
  } = require("../controllers/nhaTuyenDungControllers")
  const { protect } = require("../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessNhaTuyenDung);
router.route("/").post(protect,createNhaTuyenDung);
router.route("/update").put(protect,updateNhaTuyenDung);
router.route("/").delete(protect,deleteNhaTuyenDung);

module.exports = router;

