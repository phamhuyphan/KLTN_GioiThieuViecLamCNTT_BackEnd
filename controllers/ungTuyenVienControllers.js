const asyncHandler = require("express-async-handler")
const UngTuyenVien = require("../models/ungTuyenVienModel")

const accessUngTuyenVien = asyncHandler(async (req, res) => {
    let post = await UngTuyenVien.find()
            .populate("taikhoan", "-password");
    res.json(post)
})

const createUngTuyenVien = asyncHandler(async (req, res) => {

    let createUngTuyenVien = await UngTuyenVien.create({
        hovaten: req.body.hovaten,
        anhdaidien:req.body.anhdaidien,
        sdt: req.body.sdt,
        gioithieubanthan:req.body.gioithieubanthan,
        ngaysinh:req.body.ngaysinh,
        diachi: req.body.diachi,
        sonamlamviec:req.body.sonamlamviec,
        gioitinh:req.body.gioitinh,
        email:req.body.email,
        chucvu:req.body.chucvu,
        cv:req.body.cv,
        vitriungtuyen:req.body.vitriungtuyen,
        muctieulamviec:req.body.muctieulamviec,
        taikhoan:req.user.id
    })

    if(createUngTuyenVien){
        res.json(createUngTuyenVien);
    }else{
        res.status(404);
        throw new Error(`Create not sure`);
    }

})

const deleteUngTuyenVien = asyncHandler(async (req, res) => {
    const { ungTuyenVienId } = req.body;
    let deleteUngTuyenVien =  NhaTuyenDung.deleteOne({_id:ungTuyenVienId})
    if(deleteUngTuyenVien){
        res.send("delete "+ungTuyenVienId)
    }else{
        res.status(404);
        throw new Error(`Delete not sure`);
    }

})

const updateUngTuyenVien = asyncHandler(async (req, res) => {
    const { ungTuyenVienId } = req.body;
    let update = NhaTuyenDung.findByIdAndUpdate(ungTuyenVienId,{
        hovaten: req.body.hovaten,
        anhdaidien:req.body.anhdaidien,
        sdt: req.body.sdt,
        gioithieubanthan:req.body.gioithieubanthan,
        ngaysinh:req.body.ngaysinh,
        diachi: req.body.diachi,
        sonamlamviec:req.body.sonamlamviec,
        gioitinh:req.body.gioitinh,
        email:req.body.email,
        chucvu:req.body.chucvu,
        cv:req.body.cv,
        vitriungtuyen:req.body.vitriungtuyen,
        muctieulamviec:req.body.muctieulamviec,
    })

    if(update){
        res.json(update)
    }else{
        res.status(404);
        throw new Error(`Delete not su`);
    }
})

module.exports = {
    accessUngTuyenVien,
    createUngTuyenVien,
    deleteUngTuyenVien,
    updateUngTuyenVien
}