/**
 * Lớp danh sách nhân viên
 * => chứa nhiều đối tượng nhân viên
 * => chứa các phương thức xử lý mảng nhân viên
 */
function DanhSachNhanVien(){
    //thuộc tính
    //this là đại diện cho DanhSachNhanVien
    this.mangNV=[];

    //phương thức
    this.themNhanVien = function(nv){
        this.mangNV.push(nv);
    }
/**
* cho viTri = -1
* Nếu tìm được nv thì gán index tìm được vào viTri
* Ngược lại thì tra kq viTri=-1 (không thay đổi giá trị của viTri)
*/   
    this.timViTri = function(tk){
        var viTri=-1;
        this.mangNV.map(function(item,index){
            if(item.taiKhoanNV == tk){
                viTri = index;
            }
        });
        return viTri;
    }
    this.xoaNhanVien = function(tk){
        var viTri = this.timViTri(tk);
        if(viTri>=0){
        //tìm được
            this.mangNV.splice(viTri,1);
        }else{
            console.log("Không tìm được");
        }
    }
    this.CapNhatNhanVien = function(nv){
        var viTri = this.timViTri(nv.taiKhoanNV);
        if(viTri>=0){
            this.mangNV[viTri] = nv;
        }else{
            console.log("Không tìm được");
        }
    }
}

//Tìm kiếm
//prototype (object): thuộc tính,phương thức cho lớp đối tượng mà ko cần thêm trực tiếp trong lớp đối tượng
DanhSachNhanVien.prototype.timKiem = function(tuKhoaTK){
    var mangKQ= [];
    var lowerTK = tuKhoaTK.trim().toLowerCase();
    this.mangNV.map(function(item,index){
        //chuyển tên sv sang chữ thường
        var tenThuong = item.xl.trim().toLowerCase();
        var kq = tenThuong.indexOf(lowerTK);
        if(kq>=0){
            mangKQ.push(item);
        }
    });
    return mangKQ;
}
