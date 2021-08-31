/**
 * Phải kiểm tra thông tin trước khi lưu xuống
 */
function Validation(){
    //method
    //kiểm tra ô nhập liệu có bị trống hay ko
    this.checkEmpty = function(inputval,spanID,message){
        if(inputval.trim() == ""){
            //Không hợp lệ
            //spanID là truyền vào theo kiểu tham số, tham số đại diện cho các giá trị tên của id nên ko có dấu ""
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        }else{
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = 'none';
            //""xóa câu thông báo sau khi user nhập data đúng
            return true;
        }
    }
    //kiểm tra tài khoản trùng
    this.checkAccount = function(inputval,spanID,message,mang){
        //Kiểm tra tài khoản đã tồn tại trong mảng
        var isExist = false;
        //some=> return giá trị true/false dựa vào biểu thức so sánh
        isExist = mang.some(function(item){
            return item.taiKhoanNV === inputval.trim();
        });
        if(isExist){
            //Không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        }else{
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = 'none';
            return true;
        }
    }
    //Kiểm tra tên
    this.checkName=function(inputval, spanID, message){
        // RegExp: đối tượng giúp chuyển đổi từ string sang kiêu Regular expressions
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");
        if(pattern.test(inputval)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = 'none';
            return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        }

    }
    //Kiểm tra email
    this.checkEmail = function(inputval,spanID,message){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputval.match(pattern)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = 'none';
            return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        }
    }

    //Kiểm tra password
    this.checkPass = function(inputval,spanID,message){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(inputval.match(pattern)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = 'none';
            return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
            }
        }
    //Kiểm tra ngày lam
    this.checkDay = function(inputval,spanID,message){
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if(inputval.match(pattern)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = 'none';
            return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
            }
        }
    //KIểm tra lương cơ bản
    this.checkBasePay = function(inputval,spanID,message){
        if(inputval>=1000000 && inputval <=20000000){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = 'none';
            return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        }
    }
    //Kiểm tra giờ làm thực tế
    this.checkHours = function(inputval,spanID,message){
        if(inputval>=8 && inputval <=200){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = 'none';
            return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        }
    }
    //Kiểm tra chức vụ
    this.checkDropdown = function(selID,spanID,message){
        var optIndex = document.getElementById(selID).selectedIndex;
        if(optIndex !=0){
            //hop lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = 'none';
            return true;
        }else{
            // không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        }
    }
}