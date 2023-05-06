const mongoose = require("mongoose");
const kiNangSchema= mongoose.Schema(
  {
    tenkinang :{type: String,trim :true},//List 
    
    ungtuyenvien: { type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien" }
    
  },
  { timestamps: true }
);

const KiNang = mongoose.model("KiNang", kiNangSchema);

module.exports = KiNang;