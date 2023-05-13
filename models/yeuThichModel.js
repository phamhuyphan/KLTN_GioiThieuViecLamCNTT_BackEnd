const mongoose = require("mongoose");
const yeuThichSchema= mongoose.Schema(
  {
    ungtuyenvien:{ type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien"},

    tintuyendung:{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }
  },
  { timestamps: true }
);

const YeuThich = mongoose.model("YeuThich", yeuThichSchema);

module.exports = YeuThich;