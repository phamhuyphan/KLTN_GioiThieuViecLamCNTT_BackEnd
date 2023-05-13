const asyncHandler = require("express-async-handler")
const NganhNghe = require("../../models/TinTuyenDungModel/nganhNgheModel")
const TinTuyenDung = require("../../models/tinTuyenDungModel")


//  Get all nganh nghe
const accessNganhNghe = asyncHandler(async (req, res) => {
    await NganhNghe.find().then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createNganhNghe = asyncHandler(async (req, res) => {
   const nganhNghe = await NganhNghe.create({
        tennganhnghe: req.body.tennganhnghe
    })
    .then(data => {
        let result = data
        res.json(result)
    }).catch(error => {
        res.status(400).send(error.message || error)
    })

})

const deleteNganhNghe = asyncHandler(async (req, res) => {
    const nganhNgheId= req.params.nganhNgheId
     const deleteNganhNGhe = await NganhNghe.deleteOne({ _id:nganhNgheId})
    if(deleteNganhNGhe){
        res.send("delete "+nganhNgheId)
    }else{
        res.status(404);
        throw new Error(`Delete not sure`);
    }
})

const updateNganhNghe = asyncHandler(async (req, res) => {
    const nganhNgheId = req.body.nganhNgheId;
    const   updateData = {tennganhnghe:req.body.tenNganhNghe}
    try {
        const nganhnghe = await NganhNghe.findByIdAndUpdate(nganhNgheId, updateData, { new: true });
        if (!nganhnghe) {
          return res.status(404).send('Không tìm thấy nganh nghe');
        }
        res.json(nganhnghe);
      } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi cập nhật nganh nghe');
    }
});

module.exports = {
    accessNganhNghe,
    createNganhNghe,
    deleteNganhNghe,
    updateNganhNghe
}