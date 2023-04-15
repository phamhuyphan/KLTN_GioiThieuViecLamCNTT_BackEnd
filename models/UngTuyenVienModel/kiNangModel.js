const mongoose = require("mongoose");
const kiNangSchema= mongoose.Schema(
  {
    tenkinang :{type: String,trim :true},
    
    ungtuyenvien: { type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien" },

    taikhoan : { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    
  },
  { timestamps: true }
);

const KiNang = mongoose.model("KiNang", kiNangSchema);

module.exports = KiNang;