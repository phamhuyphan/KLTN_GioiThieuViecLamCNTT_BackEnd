const express = require("express");
const {
    accessTinTuyenDung,
    createTinTuyenDung,
    deleteTinTuyenDung,
    updateTinTuyenDung
  } = require("../controllers/tinTuyenDungControlers")
  const { protect } = require("../middleware/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessTinTuyenDung);
router.route("/").post(protect,createTinTuyenDung);
router.route("/update").put(protect,updateTinTuyenDung);
router.route("/").delete(protect,deleteTinTuyenDung);

module.exports = router;

