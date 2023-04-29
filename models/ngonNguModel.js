const mongoose = require("mongoose");
const ngonNguSchema= mongoose.Schema(
  {
    ngonngu :{type: String,trim :true}
    
  },
  { timestamps: true }
);

const NgonNgu = mongoose.model("NgonNgu", ngonNguSchema);

module.exports = NgonNgu;