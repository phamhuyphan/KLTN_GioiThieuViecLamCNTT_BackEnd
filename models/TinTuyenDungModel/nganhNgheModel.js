const mongoose = require("mongoose");
const nganhNgheSchema= mongoose.Schema(
  {
    tennganhnghe :{type: String,trim :true} 
  },
  { timestamps: true }
);

const NganhNghe = mongoose.model("NganhNghe", nganhNgheSchema);

module.exports = NganhNghe;