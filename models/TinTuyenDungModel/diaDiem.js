const mongoose = require("mongoose");
const diaDiemSchema= mongoose.Schema(
  {
    tinhthanhpho :{type: String,trim :true},

    quanhuyen:{type: String, trim: true},

    nhatuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "NhaTuyenDung" },

    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "TinTuyenDung" }
    
    ,taikhoan : { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
  },
  { timestamps: true }
);

const DiaDiem = mongoose.model("DiaDiem", diaDiemSchema);

module.exports = DiaDiem;