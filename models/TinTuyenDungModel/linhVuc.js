const mongoose = require("mongoose");
const linhVucSchema= mongoose.Schema(
  {
    tenganhnghe :{type: String,trim :true},

    hinhanh :{type: String,trim :true},

    nganhnghe: { type: mongoose.Schema.Types.ObjectId, ref: "NganhNghe" },

    nhatuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "NhaTuyenDung" },

    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "TinTuyenDung" }
    
  },
  { timestamps: true }
);

const LinhVuc = mongoose.model("LinhVuc", linhVucSchema);

module.exports = LinhVuc;