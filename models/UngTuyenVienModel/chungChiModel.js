const mongoose = require("mongoose");
const chungCHiSchema= mongoose.Schema(
  {
    tenchungchi :{type: String,trim :true},

    loaichungchi:{type: String, trim: true},

    nhacungcaochungchi:{type: String, trim: true},

    ngaycap:{type: Date, trim: true},

    ngayhethan:{type: Date, trim: true},

    ungtuyenvien: { type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien" }
    
    ,taikhoan : { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

const ChungChi = mongoose.model("ChungChi", chungCHiSchema);

module.exports = ChungChi;