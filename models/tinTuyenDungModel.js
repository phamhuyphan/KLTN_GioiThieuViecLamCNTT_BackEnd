const mongoose = require("mongoose");
const postSchema= mongoose.Schema(
  {
    tieude :{type: String,trim :true},

    vitri:{type: String, trim: true},

    soluongungtuyen:{type: Number, trim: true},

    soluongdatuyen:{type:Number, trim: true},

    sonamkinhnghiem:{type: Number, trim: true},

    gioitinh:{type: String, trim: true},

    ngayhethan:{type: Date, trim: true},

    mucluong:{type: String, trim: true},

    bangcap:{type: String, trim: true},
    
    mota:{type: String, trim: true},

    tutuoi:{type: Number, trim: true},

    dentuoi:{type: Number, trim: true},

    trangThai :{type:String, trim: true},

    phucloi:{type: String, trim: true},

    ngaycapnhat:{type: Date, trim: true},

    sumenh:{type: String, trim: true},
    
    nguoidang: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;