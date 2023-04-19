const mongoose = require("mongoose");
const hocVanSchema= mongoose.Schema(
  {
    tenNganhHoc :{type: String,trim :true},

    tenTruongHoc:{type: String, trim: true},

    tungay:{type: Date, trim: true},

    denngay:{type:Date, trim: true},

    motachitiet:{type: String, trim: true},
    
    ungtuyenvien: { type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien" }
  },
  { timestamps: true }
);

const HocVan = mongoose.model("HocVan", hocVanSchema);

module.exports = HocVan;