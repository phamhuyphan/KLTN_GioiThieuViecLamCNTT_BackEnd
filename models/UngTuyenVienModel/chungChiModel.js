const mongoose = require("mongoose");
const chungCHiSchema= mongoose.Schema(
  {
    tenchungchi :{type: String,trim :true},

    tochuc:{type: String, trim: true},

    motachitiet:{type: String, trim: true},

    ngaycap:{type: Date, trim: true},

    ngayhethan:{type: Date, trim: true},

    ungtuyenvien: { type: mongoose.Schema.Types.ObjectId, ref: "UngTuyenVien" }
  },
  { timestamps: true }
);

const ChungChi = mongoose.model("ChungChi", chungCHiSchema);

module.exports = ChungChi;