const asyncHandler = require("express-async-handler")
const NhaTuyenDung = require("../models/nhaTuyenDungModel")

const getNhaTuyenDungById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    await  NhaTuyenDung.findById(id)
         .populate("taikhoan", "-password")
         .then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
})
//  get all nhà tuyển dụng
const accessNhaTuyenDung = asyncHandler(async (req, res) => {
    let post = await  NhaTuyenDung.find()
            .populate("taikhoan", "-password");
    res.json(post)
})

const createNhaTuyenDung = asyncHandler(async (req, res) => {

    let create = await NhaTuyenDung.create({
        tennhatuyendung: req.body.tennhatuyendung,
        anhdaidien:req.body.anhdaidien,
        tencongty: req.body.tencongty,
        mota:req.body.mota,
        ngaythanhlap:req.body.ngaythanhlap,
        diachi: req.body.diachi,
        diachiWebsite:req.body.diachiWebsite,
        ngaythamgia:req.body.ngaythamgia,
        email:req.body.email,
        loainhatuyendung:req.body.loainhatuyendung,
        taikhoan:req.user._id
    })
    
    const a = await create.populate("taikhoan")
    .then(data => {
        let result = data;
        res.json(result);
        console.log(result);
    }).catch(error => {
        res.status(400).send(error.message || error)
    })
    
    console.log(req.user._id);
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
        throw new Error(`Delete not sure`);
    }
})

module.exports = {
    accessNhaTuyenDung,
    createNhaTuyenDung,
    deleteNhaTuyenDung,
    updateNhaTuyenDung,
    getNhaTuyenDungById
}