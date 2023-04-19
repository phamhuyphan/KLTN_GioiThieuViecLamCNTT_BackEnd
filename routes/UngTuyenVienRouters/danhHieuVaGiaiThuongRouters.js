const express = require("express");
const {
    accessDanhHieuVaGiaiThuong,
    createDanhHieuVaGiaiThuong,
    deleteDanhHieuVaGiaiThuong,
    updateDanhHieuVaGiaiThuong
  } = require("../../controllers/UngTuyenVienControllers/danhHieuVaGiaiThuongControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/:ungtuyenvienId").get(protect,accessDanhHieuVaGiaiThuong);
router.route("/").post(protect,createDanhHieuVaGiaiThuong);
router.route("/:ungtuyenvienId/update/DanhHieuVaGiaiThuongId").put(protect,updateDanhHieuVaGiaiThuong);
router.route("/").delete(protect,deleteDanhHieuVaGiaiThuong);

module.exports = router;

