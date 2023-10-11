// ========================Header area==================================
let randomText;
let texts = [
    "Enjoy a free gift with your purchase",
    "Terms & Conditions apply.",
    "Carbon neutral shipping on all orders",
    "Free shipping on orders over 25USD",
]

// Function để hiển thị ngẫu nhiên các phần tử trong mảng texts
function renderText() {
    const randomIndex = Math.floor(Math.random() * texts.length); // Lấy một chỉ số ngẫu nhiên
    randomText = texts[randomIndex]; // Lấy văn bản tương ứng với chỉ số ngẫu nhiên
    document.getElementById("headerText").textContent = randomText; // Hiển thị văn bản ngẫu nhiên
}

// Gọi hàm renderText mỗi giây
setInterval(renderText, 3000);


// ========================Main area==================================

// let listUser = [];


// Tạo Function tạo id
function uuid() {
    return Math.floor(Math.random() * 10000000);
}
// Tạo Function đăng kí
let users = JSON.parse(localStorage.getItem("users")) || [];
function register(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let displayName = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;

    let obj = {
        id: uuid(),
        displayName: displayName,
        email: email,
        password: password,
        phone: phone,
        cart: [],
    }


    let check = users.filter((item) => {
        return item.email == email;
    }
    )
    if (displayName === "" || email === "" || phone === "" || password === "") {
        document.getElementById("lack").style.display = "block";
        document.getElementById("success").style.display = "none";
        document.getElementById("error").style.display = "none";

    }
    else {
        if (check.length == 0) {
            // Nếu check == 0 thì tài khoản chưa được đăng kí
            users.push(obj);
            localStorage.setItem("users", JSON.stringify(users));
           
            document.getElementById("success").style.display = "block";
            document.getElementById("lack").style.display = "none";
            document.getElementById("error").style.display = "none";


            // Khi đăng kí thành công chuyển sang trang đăng nhập
            setTimeout(() => { window.location.href = "./login.html" }, 2000);
        }
        else {
            document.getElementById("error").style.display = "block";
            document.getElementById("lack").style.display = "none";
            document.getElementById("success").style.display = "none";
        }
    }

}
