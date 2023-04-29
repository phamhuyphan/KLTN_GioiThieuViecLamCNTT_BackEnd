const mongoose = require("mongoose");
const postSchema= mongoose.Schema(
  {
    tieude :{type: String,trim :true},

    vitri:{type: String, trim: true},

    soLuongTuyen:{type: Number, trim: true},

    kinhNghiem:{type: String, trim: true},
    
    diaChi:{type: String, trim: true},
    
    nganhNghe:{type: String, trim: true},
    
    hinhThucLamViec:{type: String, trim: true},
    
    moTaCongViec:{type: String, trim: true},
    
    ngayDungTuyen:{type: Date, trim: true},
    
    moTaYeuCau:{type: String, trim: true},
    
    quyenLoiUngVien:{type: String, trim: true},
    
    tenNguoiLienHe:{type: String, trim: true},
    
    soDienThoaiLienHe:{type: String, trim: true},
    
    emailLienHe:{type: String, trim: true},

    gioitinh:{type: String, trim: true},

    ngayhethan:{type: Date, trim: true},

    mucluong:{type: String, trim: true},

    bangcap:{type: String, trim: true},

    tutuoi:{type: Number, trim: true},

    dentuoi:{type: Number, trim: true},

    trangthai:{type: String, trim: true},

    ngonngu: { type: mongoose.Schema.Types.ObjectId, ref: "NgonNgu" },

    nhatuyendung: { type: mongoose.Schema.Types.ObjectId, ref: "NhaTuyenDung" }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;