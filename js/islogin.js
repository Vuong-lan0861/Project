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



// Khi người dùng nhấn vào icon user 
document.querySelector('.fa-user').onclick = () => {
    document.querySelector('.login-register').classList.toggle('active')
}

window.onscroll = () => {
    document.querySelector('.login-register').classList.remove('active')
}





// Hàm kiểm tra xem user đã login hay chưa

function IsLogged() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        document.getElementById("registerUser").style.color = "rgba(11, 138, 235, 0.942)";
        document.getElementById("logout").style.display = "block";
        document.getElementById("loginRegister").style.display = "none";

            if (currentUser.email == "vuonglan0861@gmail.com" && currentUser.password == "12345") {
                document.getElementById("addmin").style.display = "block";
                document.getElementById("cart").style.display = "none";
            } else {
                document.getElementById("addmin").style.display = "none";
                document.getElementById("cart").style.display = "block";
            }
        
    } else {
        document.getElementById("logout").style.display = "none";
        document.getElementById("loginRegister").style.display = "block";
    }
}
// IsLogged();
window.onload = IsLogged;

