const mongoose = require("mongoose");
const thongTinLienHeSchema= mongoose.Schema(
  {
    ten :{type: String,trim :true},

    sdt :{type: String,trim :true},

    email :{type: String,trim :true},

    loigioithieu :{type: String,trim :true},

    donungtuyen: { type: mongoose.Schema.Types.ObjectId, ref: "DonUngTuyen" },
    
    tintuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "TinTuyenDung" }
    
  },
  { timestamps: true }
);

const ThongTinLienHe = mongoose.model("ThongTinLienHe", thongTinLienHeSchema);

module.exports = ThongTinLienHe;