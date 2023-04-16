const asyncHandler = require("express-async-handler")
const LienHe = require("../../models/TinTuyenDungModel/lienHeModel")
const TinTuyenDung = require("../../models/tinTuyenDungModel")
const NhaTuyenDung = require("../../models/nhaTuyenDungModel")

const accessLienHe = asyncHandler(async (req, res) => {
    await LienHe.find({ lienhe: req.params.lienheId })
            .populate('tintuyendung').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createLienHe = asyncHandler(async (req, res) => {

    let createLienHe = await LienHe.create({
        ten: req.body.ten,
        sdt: req.body.sdt,
        email: req.body.email,
        tintuyendung:req.tintuyendung.id
    })

    if(createLienHe){
        res.json(createLienHe);
    }else{
        res.status(404);
        throw new Error(`Create not sure`);
    }

})

const deleteLienHe = asyncHandler(async (req, res) => {
    LienHe.deleteOne({ id: req.params.LienHeId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateLienHe = asyncHandler(async (req, res) => {
    const { LienHeId } = req.params.LienHeId;
    const   ten = req.body.ten;
    const   sdt= req.body.sdt;
    TinTuyenDung.findById(req.params.tintuyendungId).lean()
        .then(() => {
            return LienHe.findByIdAndUpdate(req.params.LienHeId, {
                ten,
                sdt,
                email,
            }, { new: true,
                new1: true, 
                new2: true}).lean();
        }).then((updateLienHe) => {
            res.json(updateLienHe);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessLienHe,
    createLienHe,
    deleteLienHe,
    updateLienHe
}