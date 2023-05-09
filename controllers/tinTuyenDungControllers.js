const asyncHandler = require("express-async-handler")
const Post = require("../models/tinTuyenDungModel")
const NhaTuyenDung = require("../models/nhaTuyenDungModel")

//  Get All Tin Tuyển Dụng
const accessTinTuyenDung = asyncHandler(async (req, res) => {
     await  Post.find()
            .populate('nganhnghe')
            .populate('ngonngu')
            .populate('nhatuyendung')
            .then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
});

//Search Tin Tuyên dụng theo tiêu đề 
const searchTinTuyenDUngByTieuDe = asyncHandler(async (req, res) => {
    try {
        const tieude = req.params.tieude;
        const regex = new RegExp(tieude, 'i');
        const tinTuyenDung = await Post.find({ tieude: regex });
        res.json(tinTuyenDung);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

//Search Tin Tuyên dụng theo lĩnh vực cấp bật và mức lương
const searchTinTuyenDUngByLinhVucAnhCapBatAndMucLuong = asyncHandler(async (req, res) => {
    try {
        const linhvuc = req.body.linhvuc;
        const capbat = req.body.capbat;
        const mucluong = req.body.mucluong;
        if((mucluong == null || mucluong == undefined) && (capbat == null || capbat == undefined)){
            const tinTuyenDung = await Post.find({linhvuc});
            res.json(tinTuyenDung);
        }else if((mucluong == null || mucluong == undefined) && (linhvuc == null || linhvuc == undefined)){
            const tinTuyenDung = await Post.find({capbat});
            res.json(tinTuyenDung);
        }else if((linhvuc == null || linhvuc == undefined) && (capbat == null || capbat == undefined)){
            const tinTuyenDung = await Post.find({mucluong});
            res.json(tinTuyenDung);
        }
        
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

//  Get  Tin Tuyển Dụng by ID
const getTinTuyenDungById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    await  Post.findById(id)
            .populate('nganhnghe')
            .populate('ngonngu')
           .populate('nhatuyendung').then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

//  Get All Tin Tuyển Dụng by ID nha tuyen dung 
const getAllTinTuyenDungByIdNhaTuyenDung = asyncHandler(async (req, res) => {
    await  Post.find({ nhatuyendung: req.params.nhatuyendungId })
            .populate('nganhnghe')
           .populate('nhatuyendung')
           .populate('ngonngu').then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});


const createTinTuyenDung = asyncHandler(async (req, res) => {
    const post = await  Post.create({

    tieude :req.body.tieude,

    vitri:req.body.vitri,

    soLuongTuyen:req.body.soLuongTuyen,

    kinhNghiem:req.body.kinhNghiem,
    
    diaChi:req.body.diaChi,
    
    hinhThucLamViec:req.body.hinhThucLamViec,
    
    moTaCongViec:req.body.moTaCongViec,
    
    ngayHetHan:req.body.ngayHetHan,
    
    moTaYeuCau:req.body.moTaCongViec,
    
    quyenLoiUngVien:req.body.quyenLoiUngVien,
    
    tenNguoiLienHe:req.body.tenNguoiLienHe,
    
    soDienThoaiLienHe:req.body.soDienThoaiLienHe,
    
    emailLienHe:req.body.emailLienHe,

    gioitinh:req.body.gioitinh,

    mucluong:req.body.mucluong,

    bangcap:req.body.bangcap,

    tutuoi:req.body.tutuoi,

    dentuoi:req.body.dentuoi,

    trangthai:req.body.trangthai,

    nganhnghe:req.body.nganhnghe,

    ngonngu:req.body.ngonngu,

    nhatuyendung:req.body.nhatuyendung
    })
    const c = await post.populate("nganhnghe")
    const a = await post.populate("ngonngu")
    const b = await post.populate("nhatuyendung")
    .then(data => {
        let result = data;
        res.json(result);
    }).catch(error => {
        res.status(400).send(error.message || error)
    })

})

const deleteTinTuyenDung = asyncHandler(async (req, res) => {
    const { postId } = req.body;
    let deletePost = await Post.deleteOne({_id:postId})
    if(deletePost){
        res.send("delete "+postId)
    }else{
        res.status(404);
        throw new Error(`Delete not sure`);
    }

})

// api duyet tin tuyen dung
const duyetTinTuyenDung = asyncHandler(async (req, res) => {
    const postId = req.body.postId;
      Post.findByIdAndUpdate(postId,{
        trangthai:req.body.trangthai,
    },{new:true}).then(data => {
        let result = data;
        res.json(result);
    }).catch(error => {
        res.status(404).send(error.message || error)
    })

})

const updateTinTuyenDung = asyncHandler(async (req, res) => {
    const postId = req.body.postId;
    const updateData = {
      tieude: req.body.tieude,
      vitri: req.body.vitri,
      soLuongTuyen: req.body.soLuongTuyen,
      kinhNghiem: req.body.kinhNghiem,
      diaChi: req.body.diaChi,
      nganhNghe: req.body.nganhNghe,
      hinhThucLamViec: req.body.hinhThucLamViec,
      moTaCongViec: req.body.moTaCongViec,
      ngayHetHan: req.body.ngayHetHan,
      moTaYeuCau: req.body.moTaCongViec,
      quyenLoiUngVien: req.body.quyenLoiUngVien,
      tenNguoiLienHe: req.body.tenNguoiLienHe,
      soDienThoaiLienHe: req.body.soDienThoaiLienHe,
      emailLienHe: req.body.emailLienHe,
      gioitinh: req.body.gioitinh,
      mucluong: req.body.mucluong,
      bangcap: req.body.bangcap,
      tutuoi: req.body.tutuoi,
      dentuoi: req.body.dentuoi,
      trangthai: req.body.trangthai
    };
  
    try {
      const tuyenDung = await Post.findByIdAndUpdate(postId, updateData, { new: true });
      if (!tuyenDung) {
        return res.status(404).send('Không tìm thấy tin tuyển dụng');
      }
      res.json(tuyenDung);
    } catch (error) {
      console.error(error);
      res.status(500).send('Lỗi khi cập nhật tin tuyển dụng');
    }
  });

module.exports = {
    accessTinTuyenDung,
    createTinTuyenDung,
    deleteTinTuyenDung,
    updateTinTuyenDung,
    getTinTuyenDungById,
    getAllTinTuyenDungByIdNhaTuyenDung,
    duyetTinTuyenDung,
    searchTinTuyenDUngByTieuDe,
    searchTinTuyenDUngByLinhVucAnhCapBatAndMucLuong
}