const asyncHandler = require("express-async-handler")
const HocVan = require("../../models/UngTuyenVienModel/HocVanModel")
const UngTuyenVien = require("../../models/ungTuyenVienModel")

const accessHocVan = asyncHandler(async (req, res) => {
    await UngTuyenVien.find({ HocVan: req.params.hocVanId })
            .populate("taikhoan", "-password").populate('ungtuyenvien').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createHocVan = asyncHandler(async (req, res) => {

    let createHocVan = await HocVan.create({
        tenNganhHoc: req.body.chucvu,
        tenTruongHoc: req.body.tencty,
        tungay: req.body.tungay,
        denngay: req.body.denngay,
        motachitiet: req.body.motachitiet,
        vanconhoc: req.body.vanconhoc,
        ungtuyenvien:req.ungtuyenvien.id,
        taikhoan:req.user.id
    })

    if(createHocVan){
        res.json(createHocVan);
    }else{
        res.status(404);
        throw new Error(`Create not sure`);
    }

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
    const   vanconhoc= req.body.vanconhoc;
    UngTuyenVien.findById(req.params.ungTuyenVienId).lean()
        .then(() => {
            return HocVan.findByIdAndUpdate(req.params.hocVanId, {
                tenNganhHoc,
                tenTruongHoc,
                tungay,
                denngay,
                motachitiet,
                vanconhoc,
            }, { 
                new: true,
                new1: true,
                new2: true,
                new3: true,
                new4: true,

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