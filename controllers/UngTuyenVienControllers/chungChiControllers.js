const asyncHandler = require("express-async-handler")
const ChungChi = require("../../models/UngTuyenVienModel/chungChiModel")
const UngTuyenVien = require("../../models/ungTuyenVienModel")

const accessChungChi = asyncHandler(async (req, res) => {
    await UngTuyenVien.find({ ChungChi: req.params.ChungChiId })
            .populate("taikhoan", "-password").populate('ungtuyenvien').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createChungChi = asyncHandler(async (req, res) => {

    let createChungChi = await ChungChi.create({
        tenchungchi: req.body.tenchungchi,
        loaichungchi: req.body.loaichungchi,
        nhacungcaochungchi: req.body.nhacungcaochungchi,
        ngaycap: req.body.ngaycap,
        ngayhethan: req.body.ngayhethan,
        ungtuyenvien:req.ungtuyenvien.id,
        taikhoan:req.user.id
    })

    if(createChungChi){
        res.json(createChungChi);
    }else{
        res.status(404);
        throw new Error(`Create not sure`);
    }

})

const deleteChungChi = asyncHandler(async (req, res) => {
    ChungChi.deleteOne({ id: req.params.ChungChiId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateChungChi = asyncHandler(async (req, res) => {
    const { ChungChiId } = req.params.ChungChiId;
    const   tenchungchi = req.body.tenchungchi;
    const   loaichungchi= req.body.tenchunloaichungchigchi;
    const   nhacungcaochungchi= req.body.nhacungcaochungchi;
    const   ngaycap= req.body.ngaycap;
    const   ngayhethan= req.body.ngayhethan;
    UngTuyenVien.findById(req.params.ChungChiId).lean()
        .then(() => {
            return ChungChi.findByIdAndUpdate(req.params.ChungChiId, {
                tenchungchi,
                loaichungchi,
                nhacungcaochungchi,
                ngaycap,
                ngayhethan
            }, { new: true,
                new1: true, 
                new2: true,
                new3: true,
            new4 : true}).lean();
        }).then((updateChungChi) => {
            res.json(updateChungChi);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessChungChi,
    createChungChi,
    deleteChungChi,
    updateChungChi
}