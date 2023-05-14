const express = require("express");
const {
    accessTinTuyenDung,
    createTinTuyenDung,
    deleteTinTuyenDung,
    updateTinTuyenDung,
    getTinTuyenDungById,
    getAllTinTuyenDungByIdNhaTuyenDung,
    duyetTinTuyenDung,
    searchTinTuyenDUngByTieuDe,
    feedbackEmail,
    searchTinTuyenDUngByLinhVucAnhCapBatAndMucLuong,
    accessTinTuyenDungSortCreatAt,
    accessTinTuyenDungSortLuong,
    accessTinTuyenDungSortOption,
    searchTinTuyenDUngByTieuDeAndSort
  } = require("../controllers/tinTuyenDungControllers")
  const { protect } = require("../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(accessTinTuyenDung);
router.route("/sortCreatAt").get(accessTinTuyenDungSortCreatAt);
router.route("/sortLuong").get(accessTinTuyenDungSortLuong);
router.route("/sort").get(accessTinTuyenDungSortOption);
router.route("/searchluongcapbatchucvu").get(searchTinTuyenDUngByLinhVucAnhCapBatAndMucLuong);
router.route("/").post(protect,createTinTuyenDung);
router.route("/duyet").put(protect,duyetTinTuyenDung);
router.route("/update").put(protect,updateTinTuyenDung);
router.route("/").delete(protect,deleteTinTuyenDung);
router.route("/:id").get(protect,getTinTuyenDungById);
router.route("/getByNhaTuyenDung/:nhatuyendungId").get(getAllTinTuyenDungByIdNhaTuyenDung);
router.route("/search/:tieude").get(searchTinTuyenDUngByTieuDe);
router.route("/search/sort/:tieude").get(searchTinTuyenDUngByTieuDeAndSort);
router.route("/emailfeedback").post(protect,feedbackEmail);
module.exports = router;

