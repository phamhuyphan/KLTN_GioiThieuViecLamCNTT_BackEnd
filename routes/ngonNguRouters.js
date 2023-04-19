const express = require("express");
const {
    accessNgonNgu,
    createNgonNgu,
    deleteNgonNgu,
    updateNgonNgu
  } = require("../controllers/ngonNguControllers")
  const { protect } = require("../../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(protect,accessNgonNgu);
router.route("/").post(protect,createNgonNgu);
router.route("/update").put(protect,updateNgonNgu);
router.route("/").delete(protect,deleteNgonNgu);

module.exports = router;

