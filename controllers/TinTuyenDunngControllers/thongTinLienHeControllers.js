const asyncHandler = require("express-async-handler")
const ThongTinLienHe = require("../../models/TinTuyenDungModel/thongTinLienHeModel")
const TinTuyenDung = require("../../models/tinTuyenDungModel")
const DonUngTuyen = require("../../models/TinTuyenDungModel/donUngTuyen")

const accessThongTinLienHe = asyncHandler(async (req, res) => {
    await DonUngTuyen.find({ donungtuyen: req.params.donungtuyenId })

            .populate('tintuyendung')
            .populate('donungtuyen').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createThongTinLienHe = asyncHandler(async (req, res) => {

    ThongTinLienHe.create({
        ten: req.user.ten,
        sdt: req.user.sdt,
        email: req.user.email,
        loigioithieu: req.user.loigioithieu,
        donungtuyen: req.donungtuyen.donungtuyenId,
        tintuyendung: req.tintuyendung.tintuyendungId
    }).populate('tintuyendung').populate('donungtuyen').then(data => {

        let result = data
        res.json(result)
    }).catch(error => {
        res.status(400).send(error.message || error)
    })

})

const deleteThongTinLienHe = asyncHandler(async (req, res) => {
    ThongTinLienHe.deleteOne({ id: req.params.ThongTinLienHeId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateThongTinLienHe = asyncHandler(async (req, res) => {
    const { ThongTinLienHeId } = req.params.ThongTinLienHeId;
    const    tenThongTinLienHe = req.body.tenThongTinLienHe;
    const    hinhanh = req.body.hinhanh;
    DonUngTuyen.findById(req.params.donungtuyenId).lean()

        .then(() => {
            return ThongTinLienHe.findByIdAndUpdate(req.params.ThongTinLienHeId, {
                tenThongTinLienHe,
                hinhanh
            }, { new: true,
                new1: true}).lean();
        }).then((updateThongTinLienHe) => {
            res.json(updateThongTinLienHe);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessThongTinLienHe,
    createThongTinLienHe,
    deleteThongTinLienHe,
    updateThongTinLienHe
}