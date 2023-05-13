const asyncHandler = require("express-async-handler")
const YeuThich = require("../models/yeuThichModel")
// Tao yêu thích
const createYeuThich = asyncHandler(async (req, res) => {
    await  YeuThich.create({

    ungtuyenvien:req.body.ungtuyenvien,

    tintuyendung:req.body.tintuyendung
    })
    const a = await donungtuyen.populate("ungtuyenvien")
    const b = await donungtuyen.populate("tintuyendung")
    .then(data => {
        let result = data;
        res.json(result);
    }).catch(error => {
        res.status(400).send(error.message || error)
    })

})

//  Get All yêu thích
const accessYeuThich = asyncHandler(async (req, res) => {
    await  YeuThich.find()
           .populate('ungtuyenvien')
           .populate('tintuyendung')
           .then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

//  Get All Yee thich by id tin tuyen dung 
const getAllYeuThichByTinTuyenDung = asyncHandler(async (req, res) => {
    await  YeuThich.find({ tintuyendungId: req.params.tintuyendungId })
    .populate('ungtuyenvien')
    .populate('tintuyendung').then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

//  Get All yeu thich by id ung tuyen vien
const getAllYeuThichByUngTuyenVien = asyncHandler(async (req, res) => {
    await  YeuThich.find({ ungtuyenvienId: req.params.ungtuyenvienId })
    .populate('ungtuyenvien')
    .populate('tintuyendung').then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

const deleteYeuThich = asyncHandler(async (req, res) => {
    const { yeuThichId } = req.body;
    const deleteDonUngTuyen = await YeuThich.deleteOne({_id:yeuThichId})
    if(deleteDonUngTuyen){
        res.send("delete "+yeuThichId)
    }else{s
        res.status(404);
        throw new Error(`Delete not sure`);
    }

})

module.exports = {
    createYeuThich,
    accessYeuThich,
    getAllYeuThichByTinTuyenDung,
    getAllYeuThichByUngTuyenVien,
    deleteYeuThich
}