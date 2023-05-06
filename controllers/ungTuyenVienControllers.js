const asyncHandler = require("express-async-handler")
const UngTuyenVien = require("../models/ungTuyenVienModel")

// Get All ung tuyen vien 
const accessUngTuyenVien = asyncHandler(async (req, res) => {
    await  UngTuyenVien.find()
           .populate('taikhoan','-password').then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

//  Get  ung tuyen vien by ID
const getUngTuyenVienById = asyncHandler(async (req, res) => {
    const id = req.body;
    await  UngTuyenVien.findOne(id)
    .populate('taikhoan','-password').then(data => {
               let result = data
               res.json(result)
           }).catch(error => {
               res.status(400).send(error.message || error);
           })
});

const createUngTuyenVien = asyncHandler(async (req, res) => {

    const ungtuyenvien = await UngTuyenVien.create({
        hovaten: req.body.hovaten,
        anhdaidien:req.body.anhdaidien,
        sdt: req.body.sdt,
        gioithieubanthan:req.body.gioithieubanthan,
        ngaysinh:req.body.ngaysinh,
        diachi: req.body.diachi,
        email:req.body.email,

        // Kinh ngiem lam viec
        chucvu :req.body.chucvu,

        tencty:req.body.tencty,

        tungayKinhNghiemLV:req.body.tungayKinhNghiemLV,

        denngayKinhNghiemLV:req.body.denngayKinhNghiemLV,

        motachitietKinhNghiemLV:req.body.motachitietKinhNghiemLV,
    // KiNang
        kiNang:req.body.kiNang,
    // Hoc Van
        tenNganhHoc :req.body.tenNganhHoc,

        tenTruongHoc:req.body.tenTruongHoc,

        tungayHocVan:req.body.tungayHocVan,

        denngayHocVan:req.body.denngayHocVan,

        motachitietHocVan:req.body.motachitietHocVan,

        //ChungChi

        tenchungchi :req.body.tenchungchi,

        tochuc:req.body.tochuc,

        motachitietChungChi:req.body.motachitietChungChi,

        ngaycap:req.body.ngaycap,

        ngayhethan:req.body.ngayhethan,
        
        // Danh Hiệu Giải Thưởng 

        tenGiaiThuong :req.body.tenGiaiThuong,

        tochucGiaiThuong:req.body.tochucGiaiThuong,

        thang:req.body.thang,

        nam:req.body.nam,

        motachitietGiaiThuong:req.body.motachitietGiaiThuong,
        
        taikhoan:req.user._id
    })
    const a = await ungtuyenvien.populate("taikhoan","-password")
    .then(data => {
        let result = data;
        res.json(result);
    }).catch(error => {
        res.status(400).send(error.message || error)
    })

})

const deleteUngTuyenVien = asyncHandler(async (req, res) => {
    const { ungTuyenVienId } = req.body;
    let deleteUngTuyenVien =  NhaTuyenDung.deleteOne({_id:ungTuyenVienId})
    if(deleteUngTuyenVien){
        res.send("delete "+ungTuyenVienId)
    }else{
        res.status(404);
        throw new Error(`Delete not sure`);
    }

})

const updateThongTinUngTuyenVien = asyncHandler(async (req, res) => {
    const ungTuyenVienId = req.body.ungTuyenVienId;
    let updateData ={
        hovaten: req.body.hovaten,
        anhdaidien:req.body.anhdaidien,
        sdt: req.body.sdt,
        gioithieubanthan:req.body.gioithieubanthan,
        ngaysinh:req.body.ngaysinh,
        diachi: req.body.diachi,
        email:req.body.email,
    };
    try {
        const update = await UngTuyenVien.findByIdAndUpdate(ungTuyenVienId, updateData, { new: true });
        if (!update) {
          return res.status(404).send('Không tìm thấy ứng tuyển viên');
        }
        res.json(update);
      } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi cập nhật thông tin ứng tuyển viên');
      }
})

const updateKinhNghiemLamViecUngTuyenVien = asyncHandler(async (req, res) => {
    const ungTuyenVienId = req.body.ungTuyenVienId;
    let updateData = {
        chucvu :req.body.chucvu,

        tencty:req.body.tencty,

        tungayKinhNghiemLV:req.body.tungayKinhNghiemLV,

        denngayKinhNghiemLV:req.body.denngayKinhNghiemLV,

        motachitietKinhNghiemLV:req.body.motachitietKinhNghiemLV
    }
    try {
        const update = await UngTuyenVien.findByIdAndUpdate(ungTuyenVienId, updateData, { new: true });
        if (!update) {
          return res.status(404).send('Không tìm thấy ứng tuyển viên');
        }
        res.json(update);
      } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi cập nhật thông tin ứng tuyển viên');
      }
})

const updateKiNangUngTuyenVien = asyncHandler(async (req, res) => {
    const ungTuyenVienId = req.body.ungTuyenVienId;
    let updateData ={
        kiNang:req.body.kiNang
    }
    try {
        const update = await UngTuyenVien.findByIdAndUpdate(ungTuyenVienId, updateData, { new: true });
        if (!update) {
          return res.status(404).send('Không tìm thấy ứng tuyển viên');
        }
        res.json(update);
      } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi cập nhật thông tin ứng tuyển viên');
      }
})

const updateHocVanUngTuyenVien = asyncHandler(async (req, res) => {
    const ungTuyenVienId = req.body.ungTuyenVienId;
    let updateData ={
        tenNganhHoc :req.body.tenNganhHoc,

        tenTruongHoc:req.body.tenTruongHoc,

        tungayHocVan:req.body.tungayHocVan,

        denngayHocVan:req.body.denngayHocVan,

        motachitietHocVan:req.body.motachitietHocVan
    }

    try {
        const update = await UngTuyenVien.findByIdAndUpdate(ungTuyenVienId, updateData, { new: true });
        if (!update) {
          return res.status(404).send('Không tìm thấy ứng tuyển viên');
        }
        res.json(update);
      } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi cập nhật thông tin ứng tuyển viên');
      }
})

const updateChungChiUngTuyenVien = asyncHandler(async (req, res) => {
    const ungTuyenVienId = req.body.ungTuyenVienId;
    let updateData = {
        tenchungchi :req.body.tenchungchi,

        tochuc:req.body.tochuc,

        motachitietChungChi:req.body.motachitietChungChi,

        ngaycap:req.body.ngaycap,

        ngayhethan:req.body.ngayhethan
    }
    try {
        const update = await UngTuyenVien.findByIdAndUpdate(ungTuyenVienId, updateData, { new: true });
        if (!update) {
          return res.status(404).send('Không tìm thấy ứng tuyển viên');
        }
        res.json(update);
      } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi cập nhật thông tin ứng tuyển viên');
      }
})

const updateDanhHieuvaGiaThuongUngTuyenVien = asyncHandler(async (req, res) => {
    const ungTuyenVienId = req.body.ungTuyenVienId;
    let updateData = {
        tenGiaiThuong :req.body.tenGiaiThuong,

        tochucGiaiThuong:req.body.tochucGiaiThuong,

        thang:req.body.thang,

        nam:req.body.nam,

        motachitietGiaiThuong:req.body.motachitietGiaiThuong,
    }

    try {
        const update = await UngTuyenVien.findByIdAndUpdate(ungTuyenVienId, updateData, { new: true });
        if (!update) {
          return res.status(404).send('Không tìm thấy ứng tuyển viên');
        }
        res.json(update);
      } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi cập nhật thông tin ứng tuyển viên');
      }
})

module.exports = {
    accessUngTuyenVien,
    createUngTuyenVien,
    deleteUngTuyenVien,
    updateThongTinUngTuyenVien,
    getUngTuyenVienById,
    updateDanhHieuvaGiaThuongUngTuyenVien,
    updateChungChiUngTuyenVien,
    updateHocVanUngTuyenVien,
    updateKiNangUngTuyenVien,
    updateKinhNghiemLamViecUngTuyenVien
}