const express = require("express");
const {
  accessUngTuyenVien,
  createUngTuyenVien,
  deleteUngTuyenVien,
  updateThongTinUngTuyenVien,
  getUngTuyenVienById,
  updateDanhHieuvaGiaThuongUngTuyenVien,
  updateChungChiUngTuyenVien,
  updateHocVanUngTuyenVien,
  updateKiNangUngTuyenVien,
  updateKinhNghiemLamViecUngTuyenVien
  } = require("../controllers/ungTuyenVienControllers")
  const { protect } = require("../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessUngTuyenVien);
router.route("/").post(protect,createUngTuyenVien);
router.route("/updateThongTinUngTuyenVien").put(protect,updateThongTinUngTuyenVien);
router.route("/updateDanhHieuvaGiaThuongUngTuyenVien").put(protect,updateDanhHieuvaGiaThuongUngTuyenVien);
router.route("/updateHocVanUngTuyenVien").put(protect,updateHocVanUngTuyenVien);
router.route("/updateChungChiUngTuyenVien").put(protect,updateChungChiUngTuyenVien);
router.route("/updateKiNangUngTuyenVien").put(protect,updateKiNangUngTuyenVien);
router.route("/updateKinhNghiemLamViecUngTuyenVien").put(protect,updateKinhNghiemLamViecUngTuyenVien);
router.route("/").delete(protect,deleteUngTuyenVien);
router.route("/:id").get(protect,getUngTuyenVienById);

module.exports = router;

