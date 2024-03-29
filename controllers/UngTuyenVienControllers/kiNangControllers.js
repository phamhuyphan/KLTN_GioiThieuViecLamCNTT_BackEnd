const asyncHandler = require("express-async-handler")
const KiNang = require("../../models/UngTuyenVienModel/kiNangModel")
const UngTuyenVien = require("../../models/ungTuyenVienModel")

const accessKiNang = asyncHandler(async (req, res) => {
    await UngTuyenVien.find({ knlamviec: req.params.kiNangId })
            .populate("taikhoan", "-password").populate('ungtuyenvien').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createKiNang = asyncHandler(async (req, res) => {

    let createKiNang = await KiNang.create({
        tenkinang: req.body.tenkinang,
        ungtuyenvien:req.ungtuyenvien.id,
        taikhoan:req.user.id
    })

    if(createKiNang){
        res.json(createKiNang);
    }else{
        res.status(404);
        throw new Error(`Create not sure`);
    }

})

const deleteKiNang = asyncHandler(async (req, res) => {
    KiNang.deleteOne({ id: req.params.kiNangId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateKiNang = asyncHandler(async (req, res) => {
    const { kiNangId } = req.params.kiNangId;
    const tenkinang = req.body.tenkinang;
    UngTuyenVien.findById(req.params.ungTuyenVienId).lean()
        .then(() => {
            return KiNang.findByIdAndUpdate(req.params.kiNangId, {
                tenkinang,
            }, { new: true }).lean();
        }).then((updateKiNang) => {
            res.json(updateKiNang);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessKiNang,
    createKiNang,
    deleteKiNang,
    updateKiNang
}