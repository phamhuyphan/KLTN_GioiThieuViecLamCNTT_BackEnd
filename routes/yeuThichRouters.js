const express = require("express");
const {
  createYeuThich,
  accessYeuThich,
  getAllYeuThichByTinTuyenDung,
  getAllYeuThichByUngTuyenVien,
  deleteYeuThich
  } = require("../controllers/yeuThichControllers")
  const { protect } = require("../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(protect,accessYeuThich);
router.route("/:ungtuyenvienId").get(protect,getAllYeuThichByUngTuyenVien);
router.route("/tintuyendung/:tintuyendungId").get(protect,getAllYeuThichByTinTuyenDung);
router.route("/").post(protect,createYeuThich);
router.route("/:yeuThichId").delete(protect,deleteYeuThich);

module.exports = router;

