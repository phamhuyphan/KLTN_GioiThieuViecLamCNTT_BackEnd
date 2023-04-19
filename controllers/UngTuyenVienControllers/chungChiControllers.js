const asyncHandler = require("express-async-handler")
const ChungChi = require("../../models/UngTuyenVienModel/chungChiModel")
const UngTuyenVien = require("../../models/ungTuyenVienModel")

const accessChungChi = asyncHandler(async (req, res) => {
    await ChungChi.find({ ungtuyenvien: req.params.ungtuyenvienId })
            .populate('ungtuyenvien').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createChungChi = asyncHandler(async (req, res) => {

     ChungChi.create({
        tenchungchi: req.body.tenchungchi,
        tochuc: req.body.tochuc,
        motachitiet: req.body.motachitiet,
        ngaycap: req.body.ngaycap,
        ngayhethan: req.body.ngayhethan,
        ungtuyenvien:req.ungtuyenvien.id
    })
    .populate('ungtuyenvien').then(data => {
        let result = data
        res.json(result)
    }).catch(error => {
        res.status(400).send(error.message || error);
    })

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
    const   tochuc= req.body.tochuc;
    const   motachitiet= req.body.motachitiet;
    const   ngaycap= req.body.ngaycap;
    const   ngayhethan= req.body.ngayhethan;
    UngTuyenVien.findById(req.params.ungtuyenvienId).lean()
        .then(() => {
            return ChungChi.findByIdAndUpdate(req.params.ChungChiId, {
                tenchungchi,
                tochuc,
                motachitiet,
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