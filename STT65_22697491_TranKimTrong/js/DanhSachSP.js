$(document).ready(function () {
    $("#toggle-filter").click(function () {
        $(".filter").toggle(); // Hiện/ẩn thanh filter khi nút được nhấn
    });

    // Xử lý sự kiện khi thay đổi kích thước màn hình
    $(window).resize(function () {
        if ($(window).width() > 1300) {
            $(".filter").show(); // Hiển thị lại thanh filter trên màn hình lớn
            $("#toggle-filter").hide(); // Ẩn nút trên màn hình lớn
        } else {
            $(".filter").hide(); // Ẩn thanh filter trên màn hình nhỏ
            $("#toggle-filter").show(); // Hiện nút trên màn hình nhỏ
        }
    }).resize(); // Gọi hàm resize ngay lập tức để áp dụng logic lần đầu

    // // Đếm lượng sản phẩm
    // var quantityInput = $('#quantity');

    // $('#increase').click(function() {
    //     var currentQuantity = parseInt(quantityInput.val());
    //     quantityInput.val(currentQuantity + 1);
    // });

    // $('#decrease').click(function() {
    //     var currentQuantity = parseInt(quantityInput.val());
    //     if (currentQuantity > 1) {
    //         quantityInput.val(currentQuantity - 1);
    //     }
    // });
});

