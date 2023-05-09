const express = require("express");
const {
    accessDonUngTuyen,
    createDonUngTuyen,
    deleteDonUngTuyen,
    updateDonUngTuyen,
    getAllDonUngTuyenByTinTuyenDung,getAllDonUngTuyenByUngTuyenVien
  } = require("../controllers/DonUngTuyenController")
  const { protect } = require("../middlewares/authMiddleware")

  const router = express.Router();
  
router.route("/").get(protect,accessDonUngTuyen);
router.route("/:ungtuyenvienId").get(protect,getAllDonUngTuyenByUngTuyenVien);
router.route("/:tintuyendungId").get(protect,getAllDonUngTuyenByTinTuyenDung);
router.route("/").post(protect,createDonUngTuyen);
router.route("/update").put(protect,updateDonUngTuyen);
router.route("/").delete(protect,deleteDonUngTuyen);

module.exports = router;

