document.addEventListener("DOMContentLoaded", function () {
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const quantityInput = document.getElementById("quantity");
    const addToCartBtn = document.getElementById("ThemGH");

    // Tăng số lượng
    increaseBtn.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    });

    // Giảm số lượng (không nhỏ hơn 1)
    decreaseBtn.addEventListener("click", function () {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        }
    });

    // Thêm sản phẩm vào giỏ hàng khi nhấn "Thêm vào giỏ hàng"
    addToCartBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn form submit

        const productImage = document.querySelector(".product-image").src;
        const productName = document.querySelector(".product-name").textContent;
        const productPrice = document.querySelector(".product-price").textContent;
        const productBrand = document.querySelector(".product-brand").textContent;
        const quantity = parseInt(quantityInput.value);

        // Tạo một đối tượng sản phẩm
        const product = {
            image: productImage,
            name: productName,
            brand: productBrand,
            price: productPrice,
            quantity: quantity,
        };

        // Lấy giỏ hàng từ Local Storage hoặc khởi tạo mảng trống
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng, thì tăng số lượng
        const existingProduct = cart.find(item => item.name === product.name);

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push(product);
        }

        // Lưu giỏ hàng vào Local Storage
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Sản phẩm đã được thêm vào giỏ hàng!");
    });
});


// GIỎ HÀNG - LẤY SẢN PHẨM ĐÃ LƯU VÀO LOCAL STORAGE ĐỂ HIỂN THỊ LÊN GIAO DIỆN GIỎ HÀNG
document.addEventListener("DOMContentLoaded", function () {
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    const clearCartButton = document.getElementById("clear-cart");
    const checkoutButton = document.getElementById("checkout");
    const paymentMethod = document.getElementById("payment-method");
    const userName = document.getElementById("user-name");
    const userAddress = document.getElementById("user-address");
    const userPhone = document.getElementById("user-phone");
    const historyContainer = document.getElementById("transaction-history");
    const clearHistoryButton = document.getElementById("clear-history");

    // Lấy giỏ hàng từ Local Storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Hàm hiển thị giỏ hàng
    function renderCart() {
        cartList.innerHTML = ""; // Xóa nội dung cũ

        if (cart.length === 0) {
            cartList.innerHTML = "<p>Giỏ hàng của bạn đang trống!</p>";
            cartTotal.textContent = "";
            return;
        }

        let total = 0;

        cart.forEach((product, index) => {
            // Tạo phần tử HTML cho mỗi sản phẩm
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <div style="width: 80%; border-radius: 5px; display: flex; border-bottom: 1px solid rgb(204, 204, 174);">
                    <input type="checkbox" class="select-product" data-index="${index}">
                    <img src="${product.image}" alt="${product.name}" style="width: 350px; height: auto;">
                    <div style="width:70%; margin-top: 55px">
                        <p style="width: 100%">
                            <strong>${product.name}</strong>
                        </p>

                        <p style="width: 100%">
                            Brand: 
                            <span style="font-weight: bolder;">
                                ${product.brand}
                            <span>
                        <p>

                        <p style="width: 100%;" >
                            Giá: 
                            <span style="color: rgb(203, 8, 8); font-weight: bolder;">
                                ${product.price}
                            <span>
                        </p>
                        <p style="width: 100%">
                            Số lượng: 
                            <span style="font-weight: bolder">
                                <button class="decrease-btn" data-index="${index}" style="padding: 2px 10px; margin: 5px; background-color: #cbded1; border: none; border-radius: 5px;">-</button>
                                <span class="quantity">${product.quantity}</span>
                                <button class="increase-btn" data-index="${index}" style="padding: 2px 8px; margin: 5px; background-color: #cbded1; border: none; border-radius: 5px;">+</button>
                            <span>
                        </p>
                    <div>
                    <button class="delete-btn" data-index="${index}" style="background-color: orange; color: #1d3a2a; padding: 5px 10px; font-weight: bolder; border: none; border-radius: 5px; ">Xóa</button>
                <div>
            `;

            // Thêm phần tử sản phẩm vào danh sách giỏ hàng
            cartList.appendChild(cartItem);

            // Tính tổng tiền (giả sử giá tiền không chứa ký tự khác ngoài số)
            total += parseInt(product.price.replace(/\D/g, "")) * product.quantity;
        });

        cartTotal.textContent = `Tổng tiền: ${total.toLocaleString()} VNĐ`;

        // Thêm sự kiện xóa cho từng nút "Xóa"
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                const productIndex = this.getAttribute("data-index");
                deleteProduct(productIndex);
            });
        });

        // Thêm sự kiện tăng/giảm số lượng
        document.querySelectorAll(".increase-btn").forEach(button => {
            button.addEventListener("click", function () {
                const productIndex = this.getAttribute("data-index");
                increaseQuantity(productIndex);
            });
        });

        document.querySelectorAll(".decrease-btn").forEach(button => {
            button.addEventListener("click", function () {
                const productIndex = this.getAttribute("data-index");
                decreaseQuantity(productIndex);
            });
        });
    }

    // Hàm tăng số lượng sản phẩm
    function increaseQuantity(index) {
        cart[index].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật lại Local Storage
        renderCart(); // Hiển thị lại giỏ hàng
    }

    // Hàm giảm số lượng sản phẩm
    function decreaseQuantity(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
            localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật lại Local Storage
            renderCart(); // Hiển thị lại giỏ hàng
        } else {
            // Nếu số lượng là 1, xóa sản phẩm
            deleteProduct(index);
        }
    }

    // Hàm xóa sản phẩm khỏi giỏ hàng
    function deleteProduct(index) {
        cart.splice(index, 1); // Xóa sản phẩm tại vị trí 'index'
        localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật lại Local Storage
        renderCart(); // Hiển thị lại giỏ hàng sau khi xóa
    }

    // Xóa toàn bộ giỏ hàng
    clearCartButton.addEventListener("click", function () {
        if (confirm("Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng không?")) {
            localStorage.removeItem("cart"); // Xóa giỏ hàng khỏi Local Storage
            cart = []; // Xóa dữ liệu trong biến cart
            renderCart(); // Cập nhật lại giao diện
        }
    });

    // HIỂM THỊ LỊCH SỬ GIAO DỊCH
    function renderTransactionHistory() {
        const historyContainer = document.getElementById("transaction-history");
        let history = JSON.parse(localStorage.getItem("transactionHistory")) || [];
    
    
        if (history.length === 0) {
        historyContainer.innerHTML += "<p>Chưa có lịch sử giao dịch nào.</p>";
        return;
        }
    
        history.forEach((transaction, index) => {
            historyContainer.innerHTML += `
            <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
              <p><strong>Ngày:</strong> ${transaction.date}</p>
              <p><strong>Tên:</strong> ${transaction.userName}</p>
              <p><strong>Địa chỉ:</strong> ${transaction.userAddress}</p>
              <p><strong>Số điện thoại:</strong> ${transaction.userPhone}</p>
              <p><strong>Phương thức thanh toán:</strong> ${transaction.paymentMethod}</p>
              <p><strong>Tổng tiền:</strong> ${transaction.total.toLocaleString()} VNĐ</p>
              <hr>
            </div>
          `;
        });
    }

    // Hàm xóa lịch sử thanh toán
    clearHistoryButton.addEventListener("click", function () {
        if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử thanh toán không?")) {
            localStorage.removeItem("transactionHistory"); // Xóa lịch sử thanh toán khỏi Local Storage
            renderTransactionHistory(); // Cập nhật lại giao diện
            alert("Lịch sử thanh toán đã được xóa.");
        }
    });

    // Thanh toán sản phẩm đã chọn
    checkoutButton.addEventListener("click", function () {
        const selectedProducts = document.querySelectorAll(".select-product:checked");

        if (selectedProducts.length === 0) {
        alert("Vui lòng chọn ít nhất một sản phẩm để thanh toán.");
        return;
        }

        if (!userName.value || !userAddress.value || !userPhone.value) {
        alert("Vui lòng nhập đầy đủ thông tin thanh toán.");
        return;
        }

        let selectedItems = [];
        let totalPayment = 0;

        selectedProducts.forEach((checkbox) => {
        const index = checkbox.getAttribute("data-index");
        const product = cart[index];
        selectedItems.push(product);
        totalPayment += parseInt(product.price.replace(/\D/g, "")) * product.quantity;
        });

        // Lưu vào lịch sử giao dịch
        let transactionHistory = JSON.parse(localStorage.getItem("transactionHistory")) || [];
        const newTransaction = {
            date: new Date().toLocaleString(),
            userName: userName.value,
            userAddress: userAddress.value,
            userPhone: userPhone.value,
            paymentMethod: paymentMethod.value,
            items: selectedItems,
            total: totalPayment,
        };

        transactionHistory.push(newTransaction);
        localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory));

        // Xóa sản phẩm đã thanh toán khỏi giỏ hàng
        cart = cart.filter((_, index) => ![...selectedProducts].some((checkbox) => checkbox.getAttribute("data-index") == index));
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Thanh toán thành công!");
        renderCart();
        renderTransactionHistory();
    });
    

    // Gọi hàm hiển thị giỏ hàng khi trang được load
    renderCart();
});



$(document).ready(function () {
    // Kiểm tra Họ và Tên
    function kiemTraHoTen() {
        var kt = /^[A-ZÀ-Ý][a-zà-ỹ]*(\s[A-ZÀ-Ý][a-zà-ỹ]*)*$/;
        if ($("#user-name").val() === "") {
            $("#tbTen").html("Vui lòng nhập họ và tên!").addClass("ThongBao");
            return false;
        }
        if (!kt.test($("#user-name").val())) {
            $("#tbTen").html("*Chữ cái đầu của mỗi từ phải viết hoa!").addClass("ThongBao");
            return false;
        }
        $("#tbTen").html("").removeClass("ThongBao");
        return true;
    }

    $("#user-name").blur(kiemTraHoTen);

    // Kiểm tra email
    function kiemTraDEmail() {
        var mauKT = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if ($("#user-address").val() === "") {
            $("#tbEmail").html("Vui lòng nhập email!").addClass("ThongBao");
            return false;
        }
        if (!mauKT.test($("#user-address").val())) {
            $("#tbEmail").html("Nhập sai cú pháp!").addClass("ThongBao");
            return false;
        }
        $("#tbEmail").html("").removeClass("ThongBao");
        return true;
    }

    $("#user-address").blur(kiemTraDEmail);

    function KiemTraSDT() {
        var mauKT = /^\d{10}$/; // Biểu thức chính quy cho số điện thoại 10 chữ số
        var phoneNumber = $("#user-phone").val(); // Lấy giá trị từ ô input
    
        if (mauKT.test(phoneNumber)) {
            $("#tbSDT").html("").removeClass("ThongBao"); // Xóa thông báo lỗi nếu hợp lệ
            return true;
        } else {
            $("#tbSDT").html("Số điện thoại phải có đúng 10 chữ số!").addClass("ThongBao");
            return false;
        }
    }
    
    // Gắn sự kiện 'blur' để kiểm tra khi người dùng rời khỏi ô input
    $("#user-phone").blur(KiemTraSDT);
});


  

  










   
