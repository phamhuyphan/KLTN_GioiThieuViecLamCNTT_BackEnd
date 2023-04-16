const mongoose = require("mongoose");
const lienHeSchema= mongoose.Schema(
  {
    ten :{type: String,trim :true},

    sdt :{type: String,trim :true},

    email :{type: String,trim :true},

    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "TinTuyenDung" }
    
  },
  { timestamps: true }
);

const LienHe = mongoose.model("LienHe", lienHeSchema);

module.exports = LienHe;