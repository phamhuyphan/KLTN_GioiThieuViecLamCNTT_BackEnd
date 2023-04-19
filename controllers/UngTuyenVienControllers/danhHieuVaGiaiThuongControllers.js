const asyncHandler = require("express-async-handler")
const DanhHieuVaGiaiThuong = require("../../models/UngTuyenVienModel/danhHieuVaGiaiThuongModel")
const UngTuyenVien = require("../../models/ungTuyenVienModel")

const accessDanhHieuVaGiaiThuong = asyncHandler(async (req, res) => {
    await DanhHieuVaGiaiThuong.find({ungtuyenvien: req.params.ungtuyenvienId})
            .populate('ungtuyenvien').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
});

const createDanhHieuVaGiaiThuong = asyncHandler(async (req, res) => {

    DanhHieuVaGiaiThuong.create({
        tenGiaiThuong: req.body.chucvu,
        tochuc: req.body.tencty,
        thang: req.body.thang,
        nam: req.body.nam,
        motachitiet: req.body.motachitiet,
        ungtuyenvien:req.ungtuyenvien.id
    })
    .populate('ungtuyenvien').then(data => {
        let result = data
        res.json(result)
    }).catch(error => {
        res.status(400).send(error.message || error);
    })

})

const deleteDanhHieuVaGiaiThuong = asyncHandler(async (req, res) => {
    DanhHieuVaGiaiThuong.deleteOne({ id: req.params.DanhHieuVaGiaiThuongId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateDanhHieuVaGiaiThuong = asyncHandler(async (req, res) => {
    const { DanhHieuVaGiaiThuongId } = req.params.DanhHieuVaGiaiThuongId;
    const   tenGiaiThuong = req.body.tenGiaiThuong;
    const   tochuc= req.body.tochuc;
    const   thang= req.body.thang;
    const   nam = req.body.nam;
    const   motachitiet= req.body.motachitiet;
    UngTuyenVien.findById(req.params.ungtuyenvienId).lean()
        .then(() => {
            return DanhHieuVaGiaiThuong.findByIdAndUpdate(req.params.DanhHieuVaGiaiThuongId, {
                tenGiaiThuong,
                tochuc,
                thang,
                nam,
                motachitiet,
            }, { new: true,
                new1: true, 
                new2: true,
                new3: true,
                new4: true,}).lean();
        }).then((updateDanhHieuVaGiaiThuong) => {
            res.json(updateDanhHieuVaGiaiThuong);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessDanhHieuVaGiaiThuong,
    createDanhHieuVaGiaiThuong,
    deleteDanhHieuVaGiaiThuong,
    updateDanhHieuVaGiaiThuong
}