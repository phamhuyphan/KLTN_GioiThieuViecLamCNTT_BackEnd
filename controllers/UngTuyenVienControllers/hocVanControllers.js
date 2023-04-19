const asyncHandler = require("express-async-handler")
const HocVan = require("../../models/UngTuyenVienModel/hocVanModel")
const UngTuyenVien = require("../../models/ungTuyenVienModel")

const accessHocVan = asyncHandler(async (req, res) => {
    await HocVan.find({ ungtuyenvien: req.params.ungtuyenvienId })
            .populate('ungtuyenvien').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createHocVan = asyncHandler(async (req, res) => {

     HocVan.create({
        tenNganhHoc: req.body.chucvu,
        tenTruongHoc: req.body.tencty,
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

const deleteHocVan = asyncHandler(async (req, res) => {
    HocVan.deleteOne({ id: req.params.hocVanId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateHocVan = asyncHandler(async (req, res) => {
    const { hocVanId } = req.params.hocVanId;
    const   tenNganhHoc = req.body.tenNganhHoc;
    const   tenTruongHoc= req.body.tenTruongHoc;
    const   tungay= req.body.tungay;
    const   denngay= req.body.denngay;
    const   motachitiet= req.body.motachitiet;
    UngTuyenVien.findById(req.params.ungTuyenVienId).lean()
        .then(() => {
            return HocVan.findByIdAndUpdate(req.params.hocVanId, {
                tenNganhHoc,
                tenTruongHoc,
                tungay,
                denngay,
                motachitiet,
            }, { 
                new: true,
                new1: true,
                new2: true,
                new3: true,

            }).lean();
        }).then((updateHocVan) => {
            res.json(updateHocVan);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessHocVan,
    createHocVan,
    deleteHocVan,
    updateHocVan
}