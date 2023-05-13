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

//  Get  Tin Tuyển Dụng by ID
const getNgonNguById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    await  NgonNgu.findById(id)
            .then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

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
    const ngonnguId= req.params.ngonnguId
     const deleteNgonNgu = await NgonNgu.deleteOne({ _id:ngonnguId})
    if(deleteNgonNgu){
        res.send("delete " + ngonnguId)
    }else{
        res.status(404);
        throw new Error(`Delete not sure`);
    }

})

const updateNgonNgu = asyncHandler(async (req, res) => {
    const ngonnguId = req.body.ngonnguId;
    const   updateData = {ngonngu:req.body.ngonngu}
    try {
        const ngonngu = await NgonNgu.findByIdAndUpdate(ngonnguId, updateData, { new: true });
        if (!ngonngu) {
          return res.status(404).send('Không tìm thấy ngon ngu');
        }
        res.json(ngonngu);
      } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi cập nhật ngon ngu');
    }
})

module.exports = {
    accessNgonNgu,
    createNgonNgu,
    deleteNgonNgu,
    updateNgonNgu,
    getNgonNguById
}