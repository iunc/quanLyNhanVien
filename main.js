var nhanVien = {
    maNhanVien: '',
    tenNhanVien: '',
    chucVu: '',
    heSoChucVu: '',
    luongCoBan: '',
    gioLamTrongThang: '',
    tongLuong: function () {
        return this.luongCoBan * this.heSoChucVu;
    },
    xepLoai: function () {
        if (this.gioLamTrongThang > 120) {
            return 'Nhân viên xuất sắc';
        }
        else {
            if (this.gioLamTrongThang > 100 && this.gioLamTrongThang <= 120){
               return 'Nhân viên giỏi';
            }
            else if(this.gioLamTrongThang > 80 && this.gioLamTrongThang <= 100){
                return 'Nhân viên khá';
            }
            else if(this.gioLamTrongThang > 50 && this.gioLamTrongThang <= 80){
                return 'Nhân viên trung bình';
            }
            else{
                return 'Không có xếp loại';
            }
        }
    }
}

document.querySelector('#btn').onclick = function () {
    nhanVien.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanVien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanVien.heSoChucVu = document.querySelector('#chucVu').value;
    nhanVien.luongCoBan = document.querySelector('#luongCoBan').value;
    nhanVien.gioLamTrongThang = document.querySelector('#gioLamTrongThang').value;

    var tagChucVu = document.getElementById('chucVu');
    var arrOption = tagChucVu.options;
    nhanVien.chucVu = arrOption[tagChucVu.selectedIndex].innerHTML;

    document.querySelector('#text-tenNhanVien').innerHTML = nhanVien.tenNhanVien;
    document.querySelector('#text-maNhanVien').innerHTML = nhanVien.maNhanVien;
    document.querySelector('#text-chucVu').innerHTML = nhanVien.chucVu;
    document.querySelector('#text-tongLuong').innerHTML = nhanVien.tongLuong();
    document.querySelector('#text-xepLoai').innerHTML = nhanVien.xepLoai();
}