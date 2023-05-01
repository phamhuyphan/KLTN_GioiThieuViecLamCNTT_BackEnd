const asyncHandler = require("express-async-handler")
const UngTuyenVien = require("../models/ungTuyenVienModel")

// Get All ung tuyen vien 
const accessUngTuyenVien = asyncHandler(async (req, res) => {
    await  UngTuyenVien.find()
           .populate('taikhoan','-password').then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

//  Get  ung tuyen vien by ID
const getUngTuyenVienById = asyncHandler(async (req, res) => {
    const id = req.body;
    await  UngTuyenVien.findOne(id)
    .populate('taikhoan','-password').then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

const createUngTuyenVien = asyncHandler(async (req, res) => {

    let createUngTuyenVien = await UngTuyenVien.create({
        hovaten: req.body.hovaten,
        anhdaidien:req.body.anhdaidien,
        sdt: req.body.sdt,
        gioithieubanthan:req.body.gioithieubanthan,
        ngaysinh:req.body.ngaysinh,
        diachi: req.body.diachi,
        email:req.body.email,
        taikhoan:req.user._id
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
    let update = UngTuyenVien.findByIdAndUpdate(ungTuyenVienId,{
        hovaten: req.body.hovaten,
        anhdaidien:req.body.anhdaidien,
        sdt: req.body.sdt,
        gioithieubanthan:req.body.gioithieubanthan,
        ngaysinh:req.body.ngaysinh,
        diachi: req.body.diachi,
        email:req.body.email,
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
    updateUngTuyenVien,
    getUngTuyenVienById
}