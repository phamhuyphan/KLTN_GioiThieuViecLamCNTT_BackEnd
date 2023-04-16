const asyncHandler = require("express-async-handler")
const DiaDiem = require("../../models/TinTuyenDungModel/diaDiem")
const TinTuyenDung = require("../../models/tinTuyenDungModel")
const NhaTuyenDung = require("../../models/nhaTuyenDungModel")

const accessDiaDiem = asyncHandler(async (req, res) => {
    await DiaDiem.find({ DiaDiem: req.params.DiaDiemId })
            .populate('tintuyendung').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
})

const createDiaDiem = asyncHandler(async (req, res) => {

    let createDiaDiem = await DiaDiem.create({
        tinhthanhpho: req.body.tinhthanhpho,
        quanhuyen: req.body.quanhuyen,
        tintuyendung:req.tintuyendung.id
    })

    if(createDiaDiem){
        res.json(createDiaDiem);
    }else{
        res.status(404);
        throw new Error(`Create not sure`);
    }

})

const deleteDiaDiem = asyncHandler(async (req, res) => {
    DiaDiem.deleteOne({ id: req.params.DiaDiemId }).then((data) => {
        res.send(data)
    }).catch(error => {
        res.send(error)
    })

})

const updateDiaDiem = asyncHandler(async (req, res) => {
    const { DiaDiemId } = req.params.DiaDiemId;
    const    tinhthanhpho = req.body.tinhthanhpho;
    const    diadiem = req.body.diadiem;
    TinTuyenDung.findById(req.params.tintuyendungId).lean()
        .then(() => {
            return DiaDiem.findByIdAndUpdate(req.params.DiaDiemId, {
                tinhthanhpho,
                diadiem
            }, { new: true,
                new1: true}).lean();
        }).then((updateDiaDiem) => {
            res.json(updateDiaDiem);
        }).catch(error => {
            res.send(error)
        })
})

module.exports = {
    accessDiaDiem,
    createDiaDiem,
    deleteDiaDiem,
    updateDiaDiem
}