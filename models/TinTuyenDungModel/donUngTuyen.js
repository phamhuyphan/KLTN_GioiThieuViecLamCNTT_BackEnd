const mongoose = require("mongoose");
const donUngTuyenSchema= mongoose.Schema(
  {
    trangthai :{type: String,trim :true},

    ngayungtuyen:{type: Date, trim: true},

    guiemail:{type: Boolean, trim: true},

    tiemnang:{type: Boolean, trim: true},

    ngaycapnhat:{type: Date, trim: true},

    phuongthuc:{type: Boolean, trim: true},

    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "TinTuyenDung" },
    
    ungtuyenvien: { type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien" },

    nhatuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "NhaTuyenDung" }
    
    ,taikhoan : { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
  },
  { timestamps: true }
);

const DonUngTuyen = mongoose.model("DonUngTuyen", donUngTuyenSchema);

module.exports = DonUngTuyen;