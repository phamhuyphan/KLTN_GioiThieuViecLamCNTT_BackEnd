const asyncHandler = require("express-async-handler")
const DanhGia = require("../../models/TinTuyenDungModel/danhGia")
const TinTuyenDung = require("../../models/tinTuyenDungModel")
const NhaTuyenDung = require("../../models/nhaTuyenDungModel")

const accessDanhGia = asyncHandler(async (req, res) => {
    await DanhGia.find({ DanhGia: req.params.DanhGiaId })
            .populate('tintuyendung')
            .populate('ungtuyenvien').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createDanhGia = asyncHandler(async (req, res) => {

    let createDanhGia = await DanhGia.create({
        noidung: req.body.noidung,
        ngay: req.body.ngay,
        xeploai:req.body.xeploai,
        tintuyendung:req.tintuyendung.id,
        ungtuyenvien:req.ungtuyenvien.id
    })

    if(createDanhGia){
        res.json(createDanhGia);
    }else{
        res.status(404);
        throw new Error(`Create not sure`);
    }

})

const deleteDanhGia = asyncHandler(async (req, res) => {
    DanhGia.deleteOne({ id: req.params.DanhGiaId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateDanhGia = asyncHandler(async (req, res) => {
    const { DanhGiaId } = req.params.DanhGiaId;
    const    noidung = req.body.noidung;
    const    ngay = req.body.ngay;
    const    xeploai = req.body.xeploai;
    TinTuyenDung.findById(req.params.tintuyendungId).lean()
        .then(() => {
            return DanhGia.findByIdAndUpdate(req.params.DanhGiaId, {
                noidung,
                ngay,xeploai
            }, { new: true,new1 :true,
                new2: true}).lean();
        }).then((updateDanhGia) => {
            res.json(updateDanhGia);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessDanhGia,
    createDanhGia,
    deleteDanhGia,
    updateDanhGia
}