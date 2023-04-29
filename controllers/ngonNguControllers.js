const asyncHandler = require("express-async-handler")
const NgonNgu = require("../models/ngonNguModel")
const TinTuyenDung = require("../models/tinTuyenDungModel")

// getALl ngon ngữ tin tuyen dung
const accessNgonNgu = asyncHandler(async (req, res) => {
    await NgonNgu.find({ tintuyendung: req.params.tintuyendungId })
            .then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createNgonNgu = asyncHandler(async (req, res) => {

     NgonNgu.create({
        ngonngu: req.body.ngonngu,
    })
    .then(data => {
        let result = data
        res.json(result)
    }).catch(error => {
        res.status(400).send(error.message || error);
    })

})

const deleteNgonNgu = asyncHandler(async (req, res) => {
    NgonNgu.deleteOne({ id: req.params.NgonNguId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateNgonNgu = asyncHandler(async (req, res) => {
    const { NgonNguId } = req.params.NgonNguId;
    const   ngonngu = req.body.ngonngu;
    TinTuyenDung.findById(req.params.tintuyendungId).lean()
        .then(() => {
            return NgonNgu.findByIdAndUpdate(req.params.NgonNguId, {
                ngonngu
            }, { new2: true}).lean();
        }).then((updateNgonNgu) => {
            res.json(updateNgonNgu);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessNgonNgu,
    createNgonNgu,
    deleteNgonNgu,
    updateNgonNgu
}