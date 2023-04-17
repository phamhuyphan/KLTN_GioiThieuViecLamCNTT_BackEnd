const asyncHandler = require("express-async-handler")
const DonUngTuyen = require("../../models/TinTuyenDungModel/donUngTuyen")
const TinTuyenDung = require("../../models/tinTuyenDungModel")
const NhaTuyenDung = require("../../models/nhaTuyenDungModel")

const accessDonUngTuyen = asyncHandler(async (req, res) => {
    await DonUngTuyen.find({ tintuyendung: req.params.tintuyendungId })
            .populate('tintuyendung')
            .populate('ungtuyenvien').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createDonUngTuyen = asyncHandler(async (req, res) => {

     DonUngTuyen.create({
        tinhthanhpho: req.body.tinhthanhpho,
        quanhuyen: req.body.quanhuyen,
        tintuyendung:req.tintuyendung.id,
        ungtuyenvien:req.ungtuyenvien.id
    })
    .populate('tintuyendung')
    .populate('ungtuyenvien').then(data => {
        let result = data
        res.json(result)
    }).catch(error => {
        res.status(400).send(error.message || error);
    })

})

const deleteDonUngTuyen = asyncHandler(async (req, res) => {
    DonUngTuyen.deleteOne({ id: req.params.DonUngTuyenId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateDonUngTuyen = asyncHandler(async (req, res) => {
    const { DonUngTuyenId } = req.params.DonUngTuyenId;
    const    tinhthanhpho = req.body.tinhthanhpho;
    const    quanhuyen = req.body.quanhuyen;
    TinTuyenDung.findById(req.params.tintuyendungId).lean()
        .then(() => {
            return DonUngTuyen.findByIdAndUpdate(req.params.DonUngTuyenId, {
                tinhthanhpho,
                quanhuyen
            }, { new: true,
                new1: true}).lean();
        }).then((updateDonUngTuyen) => {
            res.json(updateDonUngTuyen);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessDonUngTuyen,
    createDonUngTuyen,
    deleteDonUngTuyen,
    updateDonUngTuyen
}