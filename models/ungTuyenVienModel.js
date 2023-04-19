const mongoose = require("mongoose");
const ungtuyenvienSchema= mongoose.Schema(
  {
    hovaten :{type: String,trim :true},

    anhdaidien:{type: String, trim: true},

    sdt:{type: String, trim: true},

    gioithieubanthan:{type:String, trim: true},

    ngaysinh:{type: Date, trim: true},

    diachi:{type: String, trim: true},

    email:{type: String, trim: true},
    
    taikhoan: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    

  },
  { timestamps: true }
);

const UngTuyenVien = mongoose.model("UngTuyenVien", ungtuyenvienSchema);

module.exports = UngTuyenVien;