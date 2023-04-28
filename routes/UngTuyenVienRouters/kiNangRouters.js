const express = require("express");
const {
    accessKiNang,
    createKiNang,
    deleteKiNang,
    updateKiNang
  } = require("../../controllers/UngTuyenVienControllers/kiNangControllers")
  const { protect } = require("../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(protect,accessKiNang);
router.route("/").post(protect,createKiNang);
router.route("/update").put(protect,deleteKiNang);
router.route("/").delete(protect,updateKiNang);

module.exports = router;

