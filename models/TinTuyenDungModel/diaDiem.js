const mongoose = require("mongoose");
const diaDiemSchema= mongoose.Schema(
  {
    tinhthanhpho :{type: String,trim :true},

    quanhuyen:{type: String, trim: true},

    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "TinTuyenDung" }
    
  },
  { timestamps: true }
);

const DiaDiem = mongoose.model("DiaDiem", diaDiemSchema);

module.exports = DiaDiem;