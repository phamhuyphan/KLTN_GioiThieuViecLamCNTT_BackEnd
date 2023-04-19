const mongoose = require("mongoose");
const ngonNguSchema= mongoose.Schema(
  {
    ngonngu :{type: String,trim :true},

    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "TinTuyenDung" }
    
  },
  { timestamps: true }
);

const NgonNgu = mongoose.model("NgonNgu", ngonNguSchema);

module.exports = NgonNgu;