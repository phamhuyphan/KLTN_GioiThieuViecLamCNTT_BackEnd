const asyncHandler = require("express-async-handler")
const NganhNghe = require("../../models/TinTuyenDungModel/nganhNgheModel")
const TinTuyenDung = require("../../models/tinTuyenDungModel")


//  Get all nganh nghe
const accessNganhNghe = asyncHandler(async (req, res) => {
    await NganhNghe.find()
            .populate('tintuyendung').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createNganhNghe = asyncHandler(async (req, res) => {
   const nganhNghe = await NganhNghe.create({
        tennganhnghe: req.body.tennganhnghe,
        tintuyendung: req.body.tintuyendung
    })
    const a = await nganhNghe.populate('tintuyendung')
    .then(data => {
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