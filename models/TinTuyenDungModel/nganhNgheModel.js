const mongoose = require("mongoose");
const nganhNgheSchema= mongoose.Schema(
  {
    tennganhnghe :{type: String,trim :true},

    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "Post" }
    
  },
  { timestamps: true }
);

const NganhNghe = mongoose.model("NganhNghe", nganhNgheSchema);

module.exports = NganhNghe;