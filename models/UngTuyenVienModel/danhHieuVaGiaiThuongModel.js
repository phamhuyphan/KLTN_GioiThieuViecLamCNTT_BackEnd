const mongoose = require("mongoose");
const giaiThuongVaDanhHieuSchema= mongoose.Schema(
  {
    tenGiaiThuong :{type: String,trim :true},

    tochuc:{type: String, trim: true},

    thang:{type: String, trim: true},

    nam:{type: String, trim: true},

    motachitiet:{type: String, trim: true},

    ungtuyenvien: { type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien" }
  },
  { timestamps: true }
);

const GiaiThuonhVaDanhHieu = mongoose.model("GiaiThuonhVaDanhHieu", giaiThuongVaDanhHieuSchema);

module.exports = GiaiThuonhVaDanhHieu;