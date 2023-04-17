const asyncHandler = require("express-async-handler")
const LinhVuc = require("../../models/TinTuyenDungModel/linhVuc")
const TinTuyenDung = require("../../models/tinTuyenDungModel")
const NganhNghe = require("../../models/TinTuyenDungModel/nganhNgheModel")

const accessLinhVuc = asyncHandler(async (req, res) => {
    await LinhVuc.find({ nganhnghe: req.params.nganhngheId })
            .populate('tintuyendung')
            .populate('nganhnghe').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createLinhVuc = asyncHandler(async (req, res) => {

     LinhVuc.create({
        tenlinhvuc: req.body.tenlinhvuc,
        hinhanh: req.body.hinhanh,
        tintuyendung:req.tintuyendung.id,
        nganhnghe:req.nganhnghe.id
    })
    .populate('tintuyendung')
    .populate('nganhnghe').then(data => {
        let result = data
        res.json(result)
    }).catch(error => {
        res.status(400).send(error.message || error);
    })

})

const deleteLinhVuc = asyncHandler(async (req, res) => {
    LinhVuc.deleteOne({ id: req.params.LinhVucId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateLinhVuc = asyncHandler(async (req, res) => {
    const { LinhVucId } = req.params.LinhVucId;
    const    tenlinhvuc = req.body.tenlinhvuc;
    const    hinhanh = req.body.hinhanh;
    TinTuyenDung.findById(req.params.tintuyendungId).lean()
        .then(() => {
            return LinhVuc.findByIdAndUpdate(req.params.LinhVucId, {
                tenlinhvuc,
                hinhanh
            }, { new: true,
                new1: true}).lean();
        }).then((updateLinhVuc) => {
            res.json(updateLinhVuc);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessLinhVuc,
    createLinhVuc,
    deleteLinhVuc,
    updateLinhVuc
}