const express = require("express");
const {
    accessChungChi,
    createChungChi,
    deleteChungChi,
    updateChungChi
  } = require("../../controllers/UngTuyenVienControllers/chungChiControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/:ungtuyenvienId").get(protect,accessChungChi);
router.route("/").post(protect,createChungChi);
router.route("/:ungtuyenvienId/update/ChungChiId").put(protect,updateChungChi);
router.route("/").delete(protect,deleteChungChi);

module.exports = router;

