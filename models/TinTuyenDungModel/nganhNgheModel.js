const mongoose = require("mongoose");
const nganhNgheSchema= mongoose.Schema(
  {
    tenganhnghe :{type: String,trim :true},

    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "TinTuyenDung" },

    nhatuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "NhaTuyenDung" }
    
    ,taikhoan : { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    
  },
  { timestamps: true }
);

const NganhNghe = mongoose.model("NganhNghe", nganhNgheSchema);

module.exports = NganhNghe;