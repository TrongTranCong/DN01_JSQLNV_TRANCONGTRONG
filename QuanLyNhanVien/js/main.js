/**
 * Thêm nhân viên
 */

//Global var
//Tạo thể hiện của lớp DanhSachNhanVien
var dsnv = new DanhSachNhanVien();
var validation = new Validation();

//localStorage: nơi lưu trữ dữ liệu (data) ở trong trình duyệt web của laptop
//Lưu mảng NV xuống localStorage
function setLocalStorage(){
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
    
}
//Lấy data từ LocalStorage
function getLocalStorage(){
    if(localStorage.getItem("DSNV")!=null){
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }
}
getLocalStorage();

function hienThiTable(mang) {
    //content sẽ chứa nhiều thẻ tr => mỗi thẻ tr là 1 nv
    //duyệt mảng để lấy thông tin từng nv trong mảng
    //map: hàm callback function
    //item: 1 phần tử trong mảng
    //index: vị trí của phần tử trong mảng
    
    var content = "";
    mang.map(function (item, index) {
        content += `<tr>
            <td>${item.taiKhoanNV}</td>
            <td>${item.tenNV}</td>
            <td>${item.email}</td>
            <td>${item.ngayLam}</td>
            <td>${item.chucVu}</td>
            <td>${item.tlg}</td>
            <td>${item.xl}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaNV('${item.taiKhoanNV}')">Xóa</button>
                <button class="btn btn-info" onclick="xemChiTietNV('${item.taiKhoanNV}')">Xem</button>
            </td>
        </tr>`
    });
    document.getElementById("tableDanhSach").innerHTML = content;
}
function themNV() {
    //B1: Lấy thông tin từ form

    var taiKhoanNV = document.getElementById("tknv").value;
    var tenNV = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    // console.log(taiKhoan, tenNV, email, pass, ngayLam, luongCB, chucVu, gioLam);
    //validation
    var isValid = true;
    //Kiểm tra tài khoản 
    isValid &= validation.checkEmpty(taiKhoanNV,"tbTKNV","Vui lòng nhập dữ liệu!")
    &&validation.checkAccount(taiKhoanNV,"tbTKNV","Dữ liệu nhập bị trùng!",dsnv.mangNV);
    // console.log('isValid', isValid);
    //Kiểm tra tên
    isValid &= validation.checkEmpty(tenNV,"tbTen","Vui lòng nhập dữ liệu!")
    &&validation.checkName(tenNV,"tbTen","Vui lòng nhập kí tự chữ");
    //Kiểm tra email
    isValid &= validation.checkEmpty(email,"tbEmail","Vui lòng nhập dữ liệu!")
    &&validation.checkEmail(email,"tbEmail","Email không hợp lệ");
    //Kiểm tra password
    isValid &= validation.checkEmpty(pass,"tbMatKhau","Vui lòng nhập dữ liệu!")
    &&validation.checkPass(pass,"tbMatKhau","Pass không hợp lệ");
    //Kiểm tra ngày làm việc
    isValid &= validation.checkDay(ngayLam,"tbNgay","Vui lòng nhập tháng/ngày/năm");
    //Kiểm tra lương CB
    isValid &= validation.checkEmpty(luongCB,"tbLuongCB","Vui lòng nhập dữ liệu!")
    &&validation.checkBasePay(luongCB,"tbLuongCB","Vui lòng nhập trong khoảng từ 1tr đến 20tr");
    //Kiểm tra chức vụ
    isValid &= validation.checkEmpty("chucvu","tbChucVu","Vui lòng nhập dữ liệu!")
    &&validation.checkDropdown("chucvu","tbChucVu","Vui lòng chọn chức vụ hợp lệ!");
    //Kiểm tra giờ làm 
    isValid &= validation.checkEmpty(gioLam,"tbGiolam","Vui lòng nhập dữ liệu!")
    &&validation.checkHours(gioLam,"tbGiolam","Vui lòng nhập trong khoảng từ 8 giờ đến 200 giờ");
    if(isValid){
    //B2: Lưu vào danh sách NV

    var nv = new NhanVien(taiKhoanNV, tenNV, email, pass, ngayLam, luongCB, chucVu, gioLam);
    nv.tlg = nv.tinhLuong();
    nv.xl = nv.xepLoai();
    //B3: Lưu nhân viên vào danh sách nhân viên
    dsnv.themNhanVien(nv);
    // console.log(dsnv.mangNV);

    setLocalStorage();
    //B4: Hiển thị lên table
    hienThiTable(dsnv.mangNV);
    } 
}

/**
 * Xoa NV
 * - Tìm vị trí(index) của phần tử trong mảng
 * - Dựa vào taiKhoanNV để tìm được vị trí
 * - Xóa nv ra khỏi mảng dựa vào vị trí 
 */
function xoaNV(tk){
    dsnv.xoaNhanVien(tk);

    hienThiTable(dsnv.mangNV);
    setLocalStorage();
}
/**
 * - hiển thị chi tiết của nv
 * - tìm vị trí để lấy sv và hien thị lên form
 * - Lấy thông tin mới từ form
 * - lưu tạm thông tin trong đối tượng nv mới
 * - cập nhật nv mới xuống vị trí của nv cần update
 */
function xemChiTietNV(tk){
    var viTri = dsnv.timViTri(tk);
    var nv = dsnv.mangNV[viTri];
    document.getElementById("tknv").disabled = true;
    document.getElementById("tknv").value = nv.taiKhoanNV;
    document.getElementById("name").value = nv.tenNV;
    document.getElementById("email").value = nv.email;
    document.getElementById("password").value = nv.pass;
    document.getElementById("datepicker").value = nv.ngayLam;
    document.getElementById("luongCB").value = nv.luongCB;
    document.getElementById("chucvu").value = nv.chucVu;
    document.getElementById("gioLam").value = nv.gioLam;

}

function capNhatNV(){
    var taiKhoanNV = document.getElementById("tknv").value;
    var tenNV = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;

    var nv = new NhanVien(taiKhoanNV, tenNV, email, pass, ngayLam, luongCB, chucVu, gioLam);
    nv.tlg = nv.tinhLuong();
    nv.xl = nv.xepLoai();

    dsnv.CapNhatNhanVien(nv);
    hienThiTable(dsnv.mangNV);
    setLocalStorage();
}
function timTheoLoaiNhanVien(){
    var tuKhoaTK = document.getElementById("searchName").value;
    var mangKQ = dsnv.timKiem(tuKhoaTK);
    hienThiTable(mangKQ);
}
document.getElementById("searchName").onkeyup = timTheoLoaiNhanVien;
