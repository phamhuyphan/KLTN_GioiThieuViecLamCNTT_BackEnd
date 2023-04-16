const mongoose = require("mongoose");
const hinhAnhSchema= mongoose.Schema(
  {
    tenhinhanh :{type: String,trim :true},

    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "TinTuyenDung" }
    
  },
  { timestamps: true }
);

const HinhAnh = mongoose.model("HinhAnh", hinhAnhSchema);

module.exports = HinhAnh;