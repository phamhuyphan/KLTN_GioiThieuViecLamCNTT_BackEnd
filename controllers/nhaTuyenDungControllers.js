const asyncHandler = require("express-async-handler")
const NhaTuyenDung = require("../models/nhaTuyenDungModel")

const accessNhaTuyenDung = asyncHandler(async (req, res) => {
//     let post =  Post.find()
//             .populate("nguoidang", "-password");
//     res.json(post)
})

const createNhaTuyenDung = asyncHandler(async (req, res) => {

    let createNhaTuyenDung = await NhaTuyenDung.create({
        tennhatuyendung: req.body.tennhatuyendung,
        anhdaidien:req.body.anhdaidien,
        tencongty: req.body.tencongty,
        mota:req.body.mota,
        ngaythanhlap:req.body.ngaythanhlap,
        diachi: req.body.diachi,
        diachiWebsite:req.body.diachiWebsite,
        ngaythamgia:req.body.ngaythamgia,
        email:req.body.email,
        loainhatuyendung:req.body.loainhatuyendung
    })

    if(createNhaTuyenDung){
        res.json(createNhaTuyenDung);
    }else{
        res.status(404);
        throw new Error(`Create not sure`);
    }

})

const deleteNhaTuyenDung = asyncHandler(async (req, res) => {
    const { nhatuyendungId } = req.body;
    let deleteNhaTuyenDung =  NhaTuyenDung.deleteOne({_id:nhatuyendungId})
    if(deleteNhaTuyenDung){
        res.send("delete "+nhatuyendungId)
    }else{
        res.status(404);
        throw new Error(`Delete not sure`);
    }

})

const updateNhaTuyenDung = asyncHandler(async (req, res) => {
    const { nhatuyendungId } = req.body;
    let update = NhaTuyenDung.findByIdAndUpdate(nhatuyendungId,{
        tennhatuyendung: req.body.tennhatuyendung,
        anhdaidien:req.body.anhdaidien,
        tencongty: req.body.tencongty,
        mota:req.body.mota,
        ngaythanhlap:req.body.ngaythanhlap,
        diachi: req.body.diachi,
        diachiWebsite:req.body.diachiWebsite,
        ngaythamgia:req.body.ngaythamgia,
        email:req.body.email,
        loainhatuyendung:req.body.loainhatuyendung
    })

    if(update){
        res.json(update)
    }else{
        res.status(404);
        throw new Error(`Delete not su`);
    }
})

module.exports = {
    accessNhaTuyenDung,
    createNhaTuyenDung,
    deleteNhaTuyenDung,
    updateNhaTuyenDung
}