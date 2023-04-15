const mongoose = require("mongoose");
const hocVanSchema= mongoose.Schema(
  {
    tenNganhHoc :{type: String,trim :true},

    tenTruongHoc:{type: String, trim: true},

    tungay:{type: String, trim: true},

    denngay:{type:String, trim: true},

    motachitiet:{type: String, trim: true},

    vanconhoc:{type: Boolean, trim: true},
    
    ungtuyenvien: { type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien" }
    
    ,taikhoan : { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

const HocVan = mongoose.model("HocVan", hocVanSchema);

module.exports = HocVan;