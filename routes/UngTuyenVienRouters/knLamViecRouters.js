const express = require("express");
const {
    accessKinhNghiemLamViec,
    createKinhNghiemLamViec,
    deleteKinhNghiemLamViec,
    updateKinhNghiemLamViec
  } = require("../../controllers/UngTuyenVienControllers/knLamViecControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/:ungtuyenvienId").get(protect,accessKinhNghiemLamViec);
router.route("/").post(protect,createKinhNghiemLamViec);
router.route("/:ungtuyenvienId/update/knLamViecId").put(protect,updateKinhNghiemLamViec);
router.route("/").delete(protect,deleteKinhNghiemLamViec);

module.exports = router;

