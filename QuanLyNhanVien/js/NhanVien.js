//Tạo lớp đối tượng
function NhanVien (tk,ten,email,mk,ngl,lcb,cv,glam){
    //Thuộc tính
    this.taiKhoanNV = tk;
    this.tenNV = ten;
    this.email = email;
    this.pass = mk;
    this.ngayLam =ngl;
    this.luongCB = lcb;
    this.chucVu = cv;
    this.gioLam = glam;
   
    
    this.tlg=0;
    this.xl="";
    
    // Phương thức
    this.tinhLuong = function(){
        if(this.chucVu =="Sếp"){
            return this.tlg = this.luongCB * 3;
        }else if(this.chucVu =="Trưởng Phòng"){
            return this.tlg = this.luongCB *2;
        }else if(this.chucVu =="Nhân viên"){
            return this.tlg = this.luongCB *1;
        }
    };
    this.xepLoai = function(){
        if(this.gioLam < 160){
            return this.xl ="Trung bình";
        }else if(this.gioLam >=160 && this.gioLam < 176){
            return this.xl = "Khá";
        }else if(this.gioLam >=176 && this.gioLam < 192){
            return this.xl = "Giỏi";
        }else if(this.gioLam >=192){
            return this.xl = "Xuất sắc";
        }
    };
}