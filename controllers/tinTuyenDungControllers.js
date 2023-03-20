const asyncHandler = require("express-async-handler")
const Post = require("../models/tinTuyenDungModel")

const accessTinTuyenDung = asyncHandler(async (req, res) => {
    let post =  Post.find()
            .populate("nguoidang", "-password");
    res.json(post)
})

const createTinTuyenDung = asyncHandler(async (req, res) => {

    let createPost = await Post.create({
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
        nguoidang:req.user,
    })

    if(createPost){
        res.json(createPost);
    }else{
        res.status(404);
        throw new Error(`Create not su`);
    }

})

const deleteTinTuyenDung = asyncHandler(async (req, res) => {
    const { postId } = req.body;
    let deletePost =  Post.deleteOne({_id:postId})
    if(deletePost){
        res.send("delete "+postId)
    }else{
        res.status(404);
        throw new Error(`Delete not su`);
    }

})

const updateTinTuyenDung = asyncHandler(async (req, res) => {
    const { postId } = req.body;
    let update = Post.findByIdAndUpdate(postId,{
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
        res.json(update)
    }else{
        res.status(404);
        throw new Error(`Delete not su`);
    }
})

module.exports = {
    accessTinTuyenDung,
    createTinTuyenDung,
    deleteTinTuyenDung,
    updateTinTuyenDung
}