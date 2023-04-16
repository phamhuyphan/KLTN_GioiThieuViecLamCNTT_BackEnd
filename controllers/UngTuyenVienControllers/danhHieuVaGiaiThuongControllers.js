const asyncHandler = require("express-async-handler")
const DanhHieuVaGiaiThuong = require("../../models/UngTuyenVienModel/danhHieuVaGiaiThuongModel")
const UngTuyenVien = require("../../models/ungTuyenVienModel")

const accessDanhHieuVaGiaiThuong = asyncHandler(async (req, res) => {
    await UngTuyenVien.find({ DanhHieuVaGiaiThuong: req.params.DanhHieuVaGiaiThuongId })
            .populate("taikhoan", "-password").populate('ungtuyenvien').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
});

const createDanhHieuVaGiaiThuong = asyncHandler(async (req, res) => {

    let createDanhHieuVaGiaiThuong = await DanhHieuVaGiaiThuong.create({
        tenGiaiThuong: req.body.chucvu,
        tochuc: req.body.tencty,
        ngaynhan: req.body.tungay,
        motachitiet: req.body.motachitiet,
        ungtuyenvien:req.ungtuyenvien.id,
        taikhoan:req.user.id
    })

    if(createDanhHieuVaGiaiThuong){
        res.json(createDanhHieuVaGiaiThuong);
    }else{
        res.status(404);
        throw new Error(`Create not sure`);
    }

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
    const   ngaynhan= req.body.ngaynhan;
    const   motachitiet= req.body.motachitiet;
    UngTuyenVien.findById(req.params.DanhHieuVaGiaiThuongId).lean()
        .then(() => {
            return DanhHieuVaGiaiThuong.findByIdAndUpdate(req.params.DanhHieuVaGiaiThuongId, {
                tenGiaiThuong,
                tochuc,
                ngaynhan,
                motachitiet,
            }, { new: true,
                new1: true, 
                new2: true,
                new3: true,}).lean();
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