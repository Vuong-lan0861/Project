


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

    let check = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            check = true;
        }

    }

    if (displayName === "" || email === "" || phone === "" || password === "") {
        document.getElementById("lack").style.display = "block";
        document.getElementById("success").style.display = "none";
        document.getElementById("error").style.display = "none";

    }
    else {
        if (check == false) {
            
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
