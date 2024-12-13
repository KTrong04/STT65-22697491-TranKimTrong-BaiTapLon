// Chuyển động footer
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    
    document.querySelector('.parallaximage4').style.transform = `translate3d(0px, ${scrollPosition * 0.10}px, 0px)`;
    document.querySelector('.parallaximage3').style.transform = `translate3d(0px, ${scrollPosition * 0.13}px, 0px)`;
    document.querySelector('.parallaximage2').style.transform = `translate3d(0px, ${scrollPosition * 0.16}px, 0px)`;
    document.querySelector('.parallaximage1').style.transform = `translate3d(0px, ${scrollPosition * 0.19}px, 0px)`;
});



// $(document).ready(function() {

// // ĐĂNG KÝ
// // Kiểm tra Họ và Tên
//     function kiemTraHoTen() {
//         var kt = /^[A-ZÀ-Ý][a-zà-ỹ]*(\s[A-ZÀ-Ý][a-zà-ỹ]*)*$/;

//         if ($("#hovaten").val() === "") {
//             event.preventDefault();
//             $("#tbTen").html("Vui lòng nhập họ và tên");
//             $("#tbTen").addClass("ThongBao");
//             return false;
//         }
//         if (!kt.test($("#hovaten").val())) {
//             event.preventDefault();
//             $("#tbTen").html("*Chữ cái đầu của mỗi từ phải viết hoa !!");
//             $("#tbTen").addClass("ThongBao");
//             return false;
//         }
//         $("#tbTen").html(""); // Xóa thông báo nếu đúng
//         $("#tbTen").removeClass("ThongBao"); // Xóa màu đỏ
//         return true;
//     }
//     // Gắn sự kiện 'blur' để kiểm tra khi rời khỏi ô nhập liệu
//     $("#hovaten").blur(kiemTraHoTen);

// // Kiểm tra email
//     function kiemTraDEmail() {
//         var mauKT = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if ($("#email").val() == "") {
//             $("#tbEmail").html("Vui lòng nhập email");
//             $("#tbEmail").addClass("ThongBao");
//             return false;
//         }
//         if (!mauKT.test($("#email").val())) {
//             $("#tbEmail").html("Nhập sai cú pháp");
//             $("#tbEmail").addClass("ThongBao");
//             return false;
//         }
//         $("#tbEmail").html("");
//         $("#tbEmail").removeClass("ThongBao");
//         return true;
//     }
//     $("#email").blur(kiemTraDEmail);
    

// // Kiểm tra mật khẩu có khớp hay không
//     $('#DangKy').click(function() {
//         var password = $('#password').val();
//         var confirmPassword = $('#confirmPassword').val();

//         if (password === confirmPassword) {
//             $('#tbCf_Pass').text("Mật khẩu khớp.").css("color", "green");
//         } else {
//             event.preventDefault();
//             $('#tbCf_Pass').text("Mật khẩu không khớp. Vui lòng kiểm tra lại.").css("color", "red");
//         }
//     });

//     // Kiểm tra ngay sinh có được nhập hay chưa
//     function KiemTraNgaySinh() {
//         if ($('#ngaySinh').val() == "") {
//             $('#tbNS').html("Bắt buộc nhập!")
//             $('#tbNS').addClass("ThongBao")
//             return false;
//         }

//         $("#tbNS").html("");
//         $("#tbNS").removeClass("ThongBao");
//         return true;
//     }
//     $('#ngaySinh').blur(KiemTraNgaySinh);

//     // Kiểm tra nhập lại mật khẩu có được nhập hay chưa
//     function KiemTraPass2() {
//         if ($('#confirmPassword').val() == "") {
//             $('#tbCf_Pass').html("Bắt buộc nhập!")
//             $('#tbCf_Pass').addClass("ThongBao")
//             return false;
//         }

//         $("#tbCf_Pass").html("");
//         $("#tbCf_Pass").removeClass("ThongBao");
//         return true;
//     }
//     $('#confirmPassword').blur(KiemTraPass2);
    
//     // ĐĂNG NHẬP
//     // Kiểm tra use name có được nhập hay chưa
//     function KiemTraUSE() {
//         if ($('#username').val() == "") {
//             $('#tbUse').html("Bắt buộc nhập!")
//             $('#tbUse').addClass("ThongBao")
//             return false;
//         }

//         $("#tbUse").html("");
//         $("#tbUse").removeClass("ThongBao");
//         return true;
//     }
//     $('#username').blur(KiemTraUSE);

//     // Kiểm tra password có được nhập hay chưa
//     function KiemTraPass() {
//         if ($('#password').val() == "") {
//             $('#tbPass').html("Bắt buộc nhập!")
//             $('#tbPass').addClass("ThongBao")
//             return false;
//         }

//         $("#tbPass").html("");
//         $("#tbPass").removeClass("ThongBao");
//         return true;
//     }
//     $('#password').blur(KiemTraPass);
    
// });

// ĐĂNG KÝ
$(document).ready(function () {
    // Kiểm tra Họ và Tên
    function kiemTraHoTen() {
        var kt = /^[A-ZÀ-Ý][a-zà-ỹ]*(\s[A-ZÀ-Ý][a-zà-ỹ]*)*$/;
        if ($("#hovaten").val() === "") {
            $("#tbTen").html("Vui lòng nhập họ và tên!").addClass("ThongBao");
            return false;
        }
        if (!kt.test($("#hovaten").val())) {
            $("#tbTen").html("*Chữ cái đầu của mỗi từ phải viết hoa!").addClass("ThongBao");
            return false;
        }
        $("#tbTen").html("").removeClass("ThongBao");
        return true;
    }

    $("#hovaten").blur(kiemTraHoTen);

    // Kiểm tra email
    function kiemTraDEmail() {
        var mauKT = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if ($("#email").val() === "") {
            $("#tbEmail").html("Vui lòng nhập email!").addClass("ThongBao");
            return false;
        }
        if (!mauKT.test($("#email").val())) {
            $("#tbEmail").html("Nhập sai cú pháp!").addClass("ThongBao");
            return false;
        }
        $("#tbEmail").html("").removeClass("ThongBao");
        return true;
    }

    $("#email").blur(kiemTraDEmail);

    // Kiểm tra tên đăng nhập có được nhập hay chưa
    function kiemTraUSEDK() {
        if ($('#username').val() === "") {
            $('#tbUse').html("Bắt buộc nhập!").addClass("ThongBao");
            return false;
        }
        $("#tbUse").html("").removeClass("ThongBao");
        return true;
    }
    $('#username').blur(kiemTraUSEDK);

    function kiemTraMatKhau() {
        var password = $('#password').val(); // Lấy giá trị từ ô input
    
        if (password === "") {
            $('#tbPass').html("Vui lòng nhập mật khẩu!").addClass("ThongBao");
            return false;
        } else if (password.length < 8) {
            $('#tbPass').html("Mật khẩu phải có ít nhất 8 ký tự!").addClass("ThongBao");
            return false;
        } else if (!/[A-Z]/.test(password)) {
            $('#tbPass').html("Mật khẩu phải chứa ít nhất một chữ cái viết hoa!").addClass("ThongBao");
            return false;
        } else if (!/\d/.test(password)) {
            $('#tbPass').html("Mật khẩu phải chứa ít nhất một chữ số!").addClass("ThongBao");
            return false;
        }
    
        // Xóa thông báo lỗi nếu mật khẩu hợp lệ
        $('#tbPass').html("").removeClass("ThongBao");
        return true;
    }
    
    // Gắn sự kiện 'blur' để kiểm tra khi người dùng rời khỏi ô input
    $('#password').blur(kiemTraMatKhau);
    
    

    // Kiểm tra nhập lại mật khẩu
    function kiemTraMatKhauNhapLai() {
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        if (confirmPassword === "") {
            $("#tbCf_Pass").html("Vui lòng nhập lại mật khẩu!").addClass("ThongBao");
            return false;
        }
        if (password !== confirmPassword) {
            $("#tbCf_Pass").html("Mật khẩu không khớp!").addClass("ThongBao");
            return false;
        }

        $("#tbCf_Pass").html("").removeClass("ThongBao");
        return true;
    }

    $("#confirmPassword").blur(kiemTraMatKhauNhapLai);

    // Kiểm tra giới tính
    function kiemTraGioiTinh() {
        if ($('input[name="gioTinh"]:checked').length === 0) {
            $("#tbGT").html("Vui lòng chọn giới tính").addClass("ThongBao");
            return false;
        }
        $("#tbGT").html("").removeClass("ThongBao");
        return true;
    }

    // Gắn sự kiện khi người dùng thay đổi lựa chọn
    $('input[name="gioTinh"]').change(kiemTraGioiTinh);


    // Kiểm tra ngày sinh
    function KiemTraNgaySinh() {
        if ($('#ngaySinh').val() === "") {
            $('#tbNS').html("Bắt buộc nhập!").addClass("ThongBao");
            return false;
        }
        $('#tbNS').html("").removeClass("ThongBao");
        return true;
    }

    $('#ngaySinh').blur(KiemTraNgaySinh);

    // Kiểm tra checkbox điều khoản
    function kiemTraDieuKhoan() {
        if (!$('#dieuKhoang').is(':checked')) {
            alert("Bạn phải đồng ý với các Điều khoản của PetFood để có thể tiếp tục!");
            return false;
        }
        return true;
    }
    $('#dieuKhoang').blur(kiemTraDieuKhoan);

    // Xử lý sự kiện khi nhấn nút "Đăng ký"
    $('#registerForm').submit(function (event) {
        event.preventDefault(); // Ngăn form submit mặc định

        var isHoTenValid = kiemTraHoTen();
        var isEmailValid = kiemTraDEmail();
        var isUSEValid = kiemTraUSEDK();
        var isMK1Valid = kiemTraMatKhau();
        var isMK2Valid = kiemTraMatKhauNhapLai();
        var isGTValid = kiemTraGioiTinh();  
        var isNgaySinhValid = KiemTraNgaySinh();
        var isDKValid = kiemTraDieuKhoan();

        if (isHoTenValid && isEmailValid && isUSEValid && isMK1Valid && isMK2Valid && isGTValid && isNgaySinhValid && isDKValid) {
            var username = $('#username').val();
            var password = $('#password').val();

            // Kiểm tra xem tên đăng nhập đã tồn tại trong localStorage chưa
            if (localStorage.getItem(username)) {
                alert('Tên đăng nhập đã tồn tại!');
            } else {
                // Lưu thông tin vào localStorage
                localStorage.setItem(username, JSON.stringify({ password }));
                alert('Đăng ký thành công!');
                window.location.href = 'DangNhap.html'; // Chuyển đến trang đăng nhập
            }
        } else {
            alert('Vui lòng kiểm tra lại các thông tin!');
        }
    });
});


// ĐĂNG NHẬP
$(document).ready(function () {
    // Kiểm tra tên đăng nhập có được nhập hay chưa
    function kiemTraUSE() {
        if ($('#loginUsername').val() === "") {
            $('#tbUse').html("Bắt buộc nhập!").addClass("ThongBao");
            return false;
        }
        $("#tbUse").html("").removeClass("ThongBao");
        return true;
    }
    $('#loginUsername').blur(kiemTraUSE);

    // Kiểm tra mật khẩu có được nhập hay chưa
    function kiemTraPass() {
        var password = $('#loginPassword').val(); // Lấy giá trị từ ô input
    
        if (password === "") {
            $('#tbPass').html("Bắt buộc nhập!").addClass("ThongBao");
            return false;
        } else if (password.length < 8) {
            $('#tbPass').html("Mật khẩu phải có ít nhất 8 ký tự!").addClass("ThongBao");
            return false;
        }
    
        $("#tbPass").html("").removeClass("ThongBao"); // Xóa thông báo lỗi nếu hợp lệ
        return true;
    }
    
    // Gắn sự kiện 'blur' để kiểm tra khi người dùng rời khỏi ô input
    $('#loginPassword').blur(kiemTraPass);

    // Xử lý đăng nhập
    $('#loginForm').submit(function (e) {
        e.preventDefault();

        var isUserValid = kiemTraUSE();
        var isPassValid = kiemTraPass();

        if (isUserValid && isPassValid) {
            const loginUsername = $('#loginUsername').val();
            const loginPassword = $('#loginPassword').val();

            const storedUser = localStorage.getItem(loginUsername);

            if (!storedUser) {
                $('#tbUse').html("Tài khoản không tồn tại!").addClass("ThongBao");
            } else {
                const userData = JSON.parse(storedUser);
                if (userData.password === loginPassword) {
                    alert('Đăng nhập thành công!');
                    window.location.href = "TrangChu.html"; // Chuyển đến trang chủ
                } else {
                    $('#tbPass').html("Mật khẩu không đúng!").addClass("ThongBao");
                }
            }
        } else {
            alert('Vui lòng nhập đầy đủ thông tin!');
        }
    });
});
