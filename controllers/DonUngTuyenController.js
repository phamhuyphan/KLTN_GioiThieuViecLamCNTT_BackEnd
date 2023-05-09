const asyncHandler = require("express-async-handler")
const DonUngTuyen = require("../models/donUngTuyenModel")
// Tao don ung tuyen
const createDonUngTuyen = asyncHandler(async (req, res) => {
    const donungtuyen = await  DonUngTuyen.create({

    trangthai :req.body.trangthai,

    guimail:req.body.guimail,

    ungtuyenvien:req.body.ungtuyenvien,

    tintuyendung:req.body.tintuyendung
    })
    const a = await donungtuyen.populate("ungtuyenvien")
    const b = await donungtuyen.populate("tintuyendung")
    .then(data => {
        let result = data;
        res.json(result);
    }).catch(error => {
        res.status(400).send(error.message || error)
    })

})

//  Get All don ung tuyen
const accessDonUngTuyen = asyncHandler(async (req, res) => {
    await  DonUngTuyen.find()
           .populate('ungtuyenvien')
           .populate('tintuyendung')
           .then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

//  Get All Tin Tuyển Dụng by ID nha tuyen dung 
const getAllDonUngTuyenByTinTuyenDung = asyncHandler(async (req, res) => {
    await  DonUngTuyen.find({ nhatuyendung: req.params.nhaTuyenDungId })
    .populate('ungtuyenvien')
    .populate('tintuyendung').then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

//  Get All Tin Tuyển Dụng by ID nha tuyen dung 
const getAllDonUngTuyenByUngTuyenVien = asyncHandler(async (req, res) => {
    await  DonUngTuyen.find({ nhatuyendung: req.params.ungtuyenvienId })
    .populate('ungtuyenvien')
    .populate('tintuyendung').then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

const updateDonUngTuyen = asyncHandler(async (req, res) => {
    const donUngTuyenId = req.body.donUngTuyenId;
    const updateData = {
        trangthai :req.body.trangthai,
        guimail:req.body.guimail,
    };
  
    try {
      const tuyenDung = await DonUngTuyen.findByIdAndUpdate(donUngTuyenId, updateData, { new: true });
      if (!tuyenDung) {
        return res.status(404).send('Không tìm thấy đơn ứng tuyển');
      }
      res.json(tuyenDung);
    } catch (error) {
      console.error(error);
      res.status(500).send('Lỗi khi cập nhật đơn ứng tuyển');
    }
  });

module.exports = {
    createDonUngTuyen,
    accessDonUngTuyen,
    getAllDonUngTuyenByTinTuyenDung,
    getAllDonUngTuyenByUngTuyenVien,
    updateDonUngTuyen
}