const asyncHandler = require("express-async-handler")
const HinhAnh = require("../../models/TinTuyenDungModel/hinhAnhModel")
const TinTuyenDung = require("../../models/tinTuyenDungModel")
const NhaTuyenDung = require("../../models/nhaTuyenDungModel")

const accessHinhAnh = asyncHandler(async (req, res) => {
    await HinhAnh.find({ tintuyendung: req.params.tintuyendungId })
            .populate('tintuyendung').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createHinhAnh = asyncHandler(async (req, res) => {

     HinhAnh.create({
        tenHinhAnh: req.body.ten,
        tintuyendung:req.tintuyendung.id,

    })
    .populate('tintuyendung').then(data => {
        let result = data
        res.json(result)
    }).catch(error => {
        res.status(400).send(error.message || error);
    })

})

const deleteHinhAnh = asyncHandler(async (req, res) => {
    HinhAnh.deleteOne({ id: req.params.HinhAnhId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateHinhAnh = asyncHandler(async (req, res) => {
    const { HinhAnhId } = req.params.HinhAnhId;
    const   tenhinhanh = req.body.tenhinhanh;
    TinTuyenDung.findById(req.params.tintuyendungId).lean()
        .then(() => {
            return HinhAnh.findByIdAndUpdate(req.params.HinhAnhId, {
                tenhinhanh
            }, { new2: true}).lean();
        }).then((updateHinhAnh) => {
            res.json(updateHinhAnh);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessHinhAnh,
    createHinhAnh,
    deleteHinhAnh,
    updateHinhAnh
}