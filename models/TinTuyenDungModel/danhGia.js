const mongoose = require("mongoose");
const danhGiaSchema= mongoose.Schema(
  {
    noidung :{type: String,trim :true},

    ngay:{type: Date, trim: true},

    xeploai:{type: String, trim: true},

    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "TinTuyenDung" },
    
    ungtuyenvien: { type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien" },

    nhatuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "NhaTuyenDung" }
    
    ,taikhoan : { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
  },
  { timestamps: true }
);

const DanhGia = mongoose.model("DanhGia", danhGiaSchema);

module.exports = DanhGia;