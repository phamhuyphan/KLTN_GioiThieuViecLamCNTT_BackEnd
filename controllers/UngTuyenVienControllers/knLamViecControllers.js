const asyncHandler = require("express-async-handler")
const KinhNghiemLamViec = require("../../models/UngTuyenVienModel/kinhNghiemLamViecModel")
const UngTuyenVien = require("../../models/ungTuyenVienModel")

const accessKinhNghiemLamViec = asyncHandler(async (req, res) => {
    await KinhNghiemLamViec.find({ ungtuyenvien: req.params.ungtuyenvienId })
            .populate("taikhoan", "-password").populate('ungtuyenvien').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createKinhNghiemLamViec = asyncHandler(async (req, res) => {

    let createKinhNghiemLamViec = await KinhNghiemLamViec.create({
        chucvu: req.body.chucvu,
        tencty: req.body.tencty,
        tungay: req.body.tungay,
        denngay: req.body.denngay,
        motachitiet: req.body.motachitiet,
        vanconhoc: req.body.vanconhoc,
        ungtuyenvien:req.ungtuyenvien.id,
        taikhoan:req.user.id
    })
    .populate("taikhoan", "-password").populate('ungtuyenvien').then(data => {
        let result = data
        res.json(result)
    }).catch(error => {
        res.status(400).send(error.message || error);
    })

})

const deleteKinhNghiemLamViec = asyncHandler(async (req, res) => {
    KinhNghiemLamViec.deleteOne({ id: req.params.knLamViecId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateKinhNghiemLamViec = asyncHandler(async (req, res) => {
    const { knLamViecId } = req.params.knLamViecId;
    const { hovtenGiaiThuongaten } = req.params.hovtenGiaiThuongaten;
    const { tochuc } = req.params.tochuc;
    const { ngaynhan } = req.params.ngaynhan;
    const { motachitiet } = req.params.motachitiet;
    UngTuyenVien.findById(req.params.ungTuyenVienId).lean()
        .then(() => {
            return KinhNghiemLamViec.findByIdAndUpdate(req.params.knLamViecId, {
                hovtenGiaiThuongaten,
                tochuc,
                ngaynhan,
                motachitiet,

            }, { new1: true,
                new2: true,
                new3: true,
                new4: true,}).lean();
        }).then((updateKinhNghiemLamViec) => {
            res.json(updateKinhNghiemLamViec);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessKinhNghiemLamViec,
    createKinhNghiemLamViec,
    deleteKinhNghiemLamViec,
    updateKinhNghiemLamViec
}