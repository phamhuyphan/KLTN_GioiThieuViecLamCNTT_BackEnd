const asyncHandler = require("express-async-handler")
const NganhNghe = require("../../models/TinTuyenDungModel/nganhNgheModel")
const TinTuyenDung = require("../../models/tinTuyenDungModel")
const NhaTuyenDung = require("../../models/nhaTuyenDungModel")

const accessNganhNghe = asyncHandler(async (req, res) => {
    await TinTuyenDung.find({ tintuyendung: req.params.tintuyendungId })
            .populate('tintuyendung').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createNganhNghe = asyncHandler(async (req, res) => {
    Comment.create({
        tennganhnghe: req.user.tennganhnghe,
        tintuyendung: req.body.tintuyendungId
    }).populate('tintuyendung').then(data => {
        let result = data
        res.json(result)
    }).catch(error => {
        res.status(400).send(error.message || error)
    })

})

const deleteNganhNghe = asyncHandler(async (req, res) => {
    NganhNghe.deleteOne({ id: req.params.NganhNgheId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateNganhNghe = asyncHandler(async (req, res) => {
    const { NganhNgheId } = req.params.NganhNgheId;
    const   tenNganhNghe = req.body.tenNganhNghe;
    TinTuyenDung.findById(req.params.tintuyendungId).lean()
        .then(() => {
            return NganhNghe.findByIdAndUpdate(req.params.NganhNgheId, {
                tenNganhNghe
            }, { new2: true}).lean();
        }).then((updateNganhNghe) => {
            res.json(updateNganhNghe);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessNganhNghe,
    createNganhNghe,
    deleteNganhNghe,
    updateNganhNghe
}