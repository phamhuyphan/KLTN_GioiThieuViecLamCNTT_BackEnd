const mongoose = require("mongoose");
const hinhAnhSchema= mongoose.Schema(
  {
    tenhinhanh :{type: String,trim :true},

    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "TinTuyenDung" },

    nhatuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "NhaTuyenDung" }
    
    ,taikhoan : { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
  },
  { timestamps: true }
);

const HinhAnh = mongoose.model("HinhAnh", hinhAnhSchema);

module.exports = HinhAnh;