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
    const { NganhNgheId } = req.params.NganhNgheId;
    const   tenNganhNghe = req.body.tenNganhNghe;
    TinTuyenDung.findById(req.params.tintuyendungId).lean()
        .then(() => {
            return NganhNghe.findByIdAndUpdate(req.params.NganhNgheId, {
                tenNganhNghe
            }, { new2: true}).lean();
        }).then((updateNganhNghe) => {
            res.json(updateNganhNghe);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessNganhNghe,
    createNganhNghe,
    deleteNganhNghe,
    updateNganhNghe
}