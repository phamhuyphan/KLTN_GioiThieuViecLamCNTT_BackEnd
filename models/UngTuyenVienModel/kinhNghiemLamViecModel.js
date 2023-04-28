const mongoose = require("mongoose");
const kinhNghiemLamViecSchema= mongoose.Schema(
  {
    chucvu :{type: String,trim :true},

    tencty:{type: String, trim: true},

    tungay:{type: Date, trim: true},

    denngay:{type:Date, trim: true},

    motachitiet:{type: String, trim: true},

    vanconhoc:{type: Boolean, trim: true},
    
    ungtuyenvien: { type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien" }
    
    ,taikhoan : { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

const KinhNghiemLamViec = mongoose.model("KinhNghiemLamViec", kinhNghiemLamViecSchema);

module.exports = KinhNghiemLamViec;