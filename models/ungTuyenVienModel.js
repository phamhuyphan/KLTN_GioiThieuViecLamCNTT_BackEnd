const mongoose = require("mongoose");
const ungtuyenvienSchema= mongoose.Schema(
  {
    hovaten :{type: String,trim :true},

    anhdaidien:{type: String, trim: true},

    sdt:{type: String, trim: true},

    gioithieubanthan:{type:String, trim: true},

    ngaysinh:{type: Date, trim: true},

    diachi:{type: String, trim: true},

    sonamlamviec:{type: Number, trim: true},

    gioitinh:{type: String, trim: true},

    email:{type: String, trim: true},
    
    chucvu:{type: String, trim: true},

    cv:{type: String, trim: true},
    
    vitriungtuyen:{type: String, trim: true},

    muctieulamviec:{type: String, trim: true},
    

  },
  { timestamps: true }
);

const UngTuyenVien = mongoose.model("UngTuyenVien", ungtuyenvienSchema);

module.exports = UngTuyenVien;