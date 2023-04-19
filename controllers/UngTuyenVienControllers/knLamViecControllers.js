const asyncHandler = require("express-async-handler")
const KinhNghiemLamViec = require("../../models/UngTuyenVienModel/kinhNghiemLamViecModel")
const UngTuyenVien = require("../../models/ungTuyenVienModel")

const accessKinhNghiemLamViec = asyncHandler(async (req, res) => {
    await KinhNghiemLamViec.find({ ungtuyenvien: req.params.ungtuyenvienId })
            .populate('ungtuyenvien').then(data => {
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
        ungtuyenvien:req.ungtuyenvien.id,
    })
    .populate('ungtuyenvien').then(data => {
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
    const { chucvu } = req.params.chucvu;
    const { tencty } = req.params.tencty;
    const { tungay } = req.params.tungay;
    const { denngay } = req.params.denngay;
    const { motachitiet } = req.params.motachitiet;
    UngTuyenVien.findById(req.params.ungTuyenVienId).lean()
        .then(() => {
            return KinhNghiemLamViec.findByIdAndUpdate(req.params.knLamViecId, {
                chucvu,
                tencty,
                denngay,
                tungay,
                motachitiet

            }, { new1: true,
                new2: true,
                new3: true,
                new4: true,
                new5: true,
            }).lean();
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