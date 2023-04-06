const express = require("express");
const {
    accessUngTuyenVien,
    createUngTuyenVien,
    deleteUngTuyenVien,
    updateUngTuyenVien
  } = require("../controllers/ungTuyenVienControllers")
  const { protect } = require("../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessUngTuyenVien);
router.route("/").post(protect,createUngTuyenVien);
router.route("/update").put(protect,updateUngTuyenVien);
router.route("/").delete(protect,deleteUngTuyenVien);

module.exports = router;

