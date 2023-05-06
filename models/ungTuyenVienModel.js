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
// Kinh Nghiem Lam viec
    chucvu :{type: String,trim :true},

    tencty:{type: String, trim: true},

    tungayKinhNghiemLV:{type: Date, trim: true},

    denngayKinhNghiemLV:{type:Date, trim: true},

    motachitietKinhNghiemLV:{type: String, trim: true},
// KiNang
    kiNang:{type:String,trim: true},
// Hoc Van
    tenNganhHoc :{type: String,trim :true},

    tenTruongHoc:{type: String, trim: true},

    tungayHocVan:{type: Date, trim: true},

    denngayHocVan:{type:Date, trim: true},

    motachitietHocVan:{type: String, trim: true},

    //ChungChi

    tenchungchi :{type: String,trim :true},

    tochuc:{type: String, trim: true},

    motachitietChungChi:{type: String, trim: true},

    ngaycap:{type: Date, trim: true},

    ngayhethan:{type: Date, trim: true},
    
    // Danh Hiệu Giải Thưởng 

    tenGiaiThuong :{type: String,trim :true},

    tochucGiaiThuong:{type: String, trim: true},

    thang:{type: String, trim: true},

    nam:{type: String, trim: true},

    motachitietGiaiThuong:{type: String, trim: true},
    
    taikhoan: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    
  },
  { timestamps: true }
);

const UngTuyenVien = mongoose.model("UngTuyenVien", ungtuyenvienSchema);

module.exports = UngTuyenVien;