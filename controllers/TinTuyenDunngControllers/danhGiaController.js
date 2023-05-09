const asyncHandler = require("express-async-handler")
const DanhGia = require("../../models/TinTuyenDungModel/danhGia")


// Get All danh gia
const accessDanhGia = asyncHandler(async (req, res) => {
    await DanhGia.find()
            .populate('tintuyendung')
            .populate('ungtuyenvien')
            .then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

// Get All danh gia by ID tin tuyen dung
const getAllDanhGiaByIdTinTuyenDung = asyncHandler(async (req, res) => {
    await DanhGia.find({ tintuyendungId: req.params.tintuyendungId })
            .populate('tintuyendung')
            .populate('ungtuyenvien')
            .then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createDanhGia = asyncHandler(async (req, res) => {

    const danhgia = await DanhGia.create({
        noidung: req.body.noidung,
        ngay: req.body.ngay,
        xeploai:req.body.xeploai,
        tintuyendung:req.body.tintuyendung,
        ungtuyenvien:req.body.ungtuyenvien
    })
    const a = await danhgia.populate('tintuyendung')
    const b = await danhgia.populate('ungtuyenvien')
    .then(data => {
        let result = data
        res.json(result)
    }).catch(error => {
        res.status(400).send(error.message || error);
    })

})

const deleteDanhGia = asyncHandler(async (req, res) => {
    const { danhGiaId } = req.body;
    const deleteDanhGia = await DanhGia.deleteOne({_id:danhGiaId})
    if(deleteDanhGia){
        res.send("delete "+danhGiaId)
    }else{
        res.status(404);
        throw new Error(`Delete not sure`);
    }

})

const updateDanhGia = asyncHandler(async (req, res) => {
    const  danhGiaId = req.body.danhGiaId;
    const updateData = {
        noidung : req.body.noidung,
        ngay : req.body.ngay,
        xeploai :req.body.xeploai
    };
    try {
        const tuyenDung = await DanhGia.findByIdAndUpdate(danhGiaId, updateData, { new: true });
        if (!tuyenDung) {
          return res.status(404).send('Không tìm thấy đánh giá');
        }
        res.json(tuyenDung);
      } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi cập nhật đánh giá');
      }
})

module.exports = {
    accessDanhGia,
    createDanhGia,
    deleteDanhGia,
    updateDanhGia,
    getAllDanhGiaByIdTinTuyenDung
}