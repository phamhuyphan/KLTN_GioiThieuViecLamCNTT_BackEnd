const asyncHandler = require("express-async-handler")
const Post = require("../models/tinTuyenDungModel")
const NhaTuyenDung = require("../models/nhaTuyenDungModel")

//  Get All Tin Tuyển Dụng
const accessTinTuyenDung = asyncHandler(async (req, res) => {
     await  Post.find()
            .populate('ngonngu')
            .populate('nhatuyendung')
            .then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
});

//  Get  Tin Tuyển Dụng by ID
const getTinTuyenDungById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    await  Post.findById(id)
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
    
    nganhNghe:req.body.nganhNghe,
    
    hinhThucLamViec:req.body.hinhThucLamViec,
    
    moTaCongViec:req.body.moTaCongViec,
    
    ngatHetHan:req.body.ngatHetHan,
    
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

    ngonngu:req.body.ngonngu,

    nhatuyendung:req.body.nhatuyendung
    })
    const a = await post.populate("ngonngu")
    const b = await post.populate("nhatuyendung")
    .then(data => {
        let result = data;
        res.json(result);
        console.log(result);
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
    const { postId } = req.body;
    let update =  Post.findByIdAndUpdate(postId,{
        trangthai:req.body.trangthai,
    })

    if(update){
        res.send(update);
    }else{
        res.status(404);
        throw new Error(`Update not sure`);
    }

})

const updateTinTuyenDung = asyncHandler(async (req, res) => {
    const { postId } = req.body;
    let update =  Post.findByIdAndUpdate(postId,{
        tieude :req.body.tieude,

        vitri:req.body.vitri,

        soLuongTuyen:req.body.soLuongTuyen,
    
        kinhNghiem:req.body.kinhNghiem,
        
        diaChi:req.body.diaChi,
        
        nganhNghe:req.body.nganhNghe,
        
        hinhThucLamViec:req.body.hinhThucLamViec,
        
        moTaCongViec:req.body.moTaCongViec,
        
        ngatHetHan:req.body.ngatHetHan,
        
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

        
    })

    if(update){
        res.send(update);
    }else{
        res.status(404);
        throw new Error(`Update not sure`);
    }
})

module.exports = {
    accessTinTuyenDung,
    createTinTuyenDung,
    deleteTinTuyenDung,
    updateTinTuyenDung,
    getTinTuyenDungById,
    getAllTinTuyenDungByIdNhaTuyenDung,
    duyetTinTuyenDung
}