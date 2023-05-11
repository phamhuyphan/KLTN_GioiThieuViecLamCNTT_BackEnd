const mongoose = require("mongoose");
const donUngTuyenSchema= mongoose.Schema(
  {
    trangthai :{type: String,trim :true},

    ungtuyenvien:{ type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien"},

    tintuyendung:{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }
  },
  { timestamps: true }
);

const DonUngTuyen = mongoose.model("DonUngTuyen", donUngTuyenSchema);

module.exports = DonUngTuyen;