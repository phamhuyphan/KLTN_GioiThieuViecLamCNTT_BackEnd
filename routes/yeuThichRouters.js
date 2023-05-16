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
  
router.route("/").get(accessYeuThich);
router.route("/:ungtuyenvienId").get(getAllYeuThichByUngTuyenVien);
router.route("/tintuyendung/:tintuyendungId").get(protect,getAllYeuThichByTinTuyenDung);
router.route("/").post(protect,createYeuThich);
router.route("/:yeuThichId").delete(deleteYeuThich);

module.exports = router;

