const mongoose = require("mongoose");
const nhatuyendungSchema= mongoose.Schema(
  {
    tennhatuyendung :{type: String,trim :true},

    anhdaidien:{type: String, trim: true},

    tencongty:{type: String, trim: true},

    mota:{type:String, trim: true},

    ngaythanhlap:{type: Date, trim: true},

    diachi:{type: String, trim: true},

    diachiWebsite:{type: String, trim: true},

    ngaythamgia:{type: Date, trim: true},

    email:{type: String, trim: true},
    
    loainhatuyendung:{type: String, trim: true},

    taikhoan: { type: mongoose.Schema.Types.ObjectId, ref: "User" }

  },
  { timestamps: true }
);

const NhaTuyenDung = mongoose.model("NhaTuyenDung", nhatuyendungSchema);

module.exports = NhaTuyenDung;  