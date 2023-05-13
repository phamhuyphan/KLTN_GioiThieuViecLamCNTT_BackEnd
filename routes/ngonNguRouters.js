const express = require("express");
const {
    accessNgonNgu,
    createNgonNgu,
    deleteNgonNgu,
    updateNgonNgu,
    getNgonNguById
  } = require("../controllers/ngonNguControllers")
  const { protect } = require("../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(protect,accessNgonNgu);
router.route("/").post(protect,createNgonNgu);
router.route("/update").put(protect,updateNgonNgu);
router.route("/:ngonnguId").delete(protect,deleteNgonNgu);
router.route("/:id").get(protect,getNgonNguById);

module.exports = router;

