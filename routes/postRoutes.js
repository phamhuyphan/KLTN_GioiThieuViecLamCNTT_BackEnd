const express = require("express");
const {
    accessTinTuyenDung,
    createTinTuyenDung,
    deleteTinTuyenDung,
    updateTinTuyenDung,
    getTinTuyenDungById,
    getAllTinTuyenDungByIdNhaTuyenDung,
    duyetTinTuyenDung
  } = require("../controllers/tinTuyenDungControllers")
  const { protect } = require("../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(protect,accessTinTuyenDung);
router.route("/").post(protect,createTinTuyenDung);
router.route("/duyet").put(protect,duyetTinTuyenDung);
router.route("/update").put(protect,updateTinTuyenDung);
router.route("/").delete(protect,deleteTinTuyenDung);
router.route("/:id").get(protect,getTinTuyenDungById);
router.route("/:nhatuyendungId").delete(protect,getAllTinTuyenDungByIdNhaTuyenDung);

module.exports = router;

