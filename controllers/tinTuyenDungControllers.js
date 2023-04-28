const asyncHandler = require("express-async-handler")
const Post = require("../models/tinTuyenDungModel")
const NhaTuyenDung = require("../models/nhaTuyenDungModel")

const accessTinTuyenDung = asyncHandler(async (req, res) => {
     await  Post.find()
            .populate("nguoidang", "-password").populate('nhatuyendung').then(data => {
                let result = data
                res.json(result)
            }).catch(error => {
                res.status(400).send(error.message || error);
            })
});

const createTinTuyenDung = asyncHandler(async (req, res) => {

    let createPost = await Post.create({
        tieude: req.body.tieude,
        diachi: req.body.diachi,
        nganhnghe: req.body.nganhnghe,
        vitri:req.body.vitri,
        soluongtuyen: req.body.soluongtuyen,
        hinhthuclamviec: req.body.hinhthuclamviec,
        mucluong:req.body.mucluong,
        motacongviec: req.body.motacongviec,
        sonamkinhnghiem:req.body.sonamkinhnghiem,
        bangcap:req.body.bangcap,
        gioitinh: req.body.gioitinh,
        ngayhethan:req.body.ngayhethan,
        tutuoi:req.body.tutuoi,
        dentuoi:req.body.dentuoi,
        motayeucau:req.body.motayeucau,
        quyenloiungvien:req.body.quyenloiungvien,
        tenlienhe: req.body.tenlienhe,
        sodienthoailienhe: req.body.sodienthoai,
        emaillienhe: req.body.emaillienhe,
        ngaycapnhat:req.body.ngaycapnhat,
        trangthai:req.body.trangthai,
        nhatuyendung:req.body.nhatuyendung,
    })

    if(createPost){
        res.send(createPost);
    }else{
        res.status(404);
        throw new Error(`Create not sure`);
    }

});

const deleteTinTuyenDung = asyncHandler(async (req, res) => {
    const { postId } = req.body;
    let deletePost = await Post.deleteOne({_id:postId})
    if(deletePost){
        res.send("delete "+postId)
    }else{
        res.status(404);
        throw new Error(`Delete not sure`);
    }

})

const updateTinTuyenDung = asyncHandler(async (req, res) => {
    const { postId } = req.body;
    let update = await Post.findByIdAndUpdate(postId,{
        tieude: req.body.tieude,
        vitri:req.body.vitri,
        soluongungtuyen: req.body.soluongungtuyen,
        soluongdatuyen:req.body.soluongdatuyen,
        sonamkinhnghiem:req.body.sonamkinhnghiem,
        gioitinh: req.body.gioitinh,
        ngayhethan:req.body.ngayhethan,
        mucluong:req.body.mucluong,
        bangcap:req.body.bangcap,
        mota:req.body.mota,
        tutuoi:req.body.tutuoi,
        dentuoi:req.body.dentuoi,
        trangthai:req.body.trangthai,
        phucloi:req.body.phucloi,
        ngaycapnhat:req.body.ngaycapnhat,
        sumenh:req.body.sumenh,
    })

    if(update){
        res.send(update);
    }else{
        res.status(404);
        throw new Error(`Update not sure`);
    }
})

module.exports = {
    accessTinTuyenDung,
    createTinTuyenDung,
    deleteTinTuyenDung,
    updateTinTuyenDung
}