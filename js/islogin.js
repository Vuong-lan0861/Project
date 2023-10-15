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
    let checkLogin = localStorage.getItem("usersId");

    let users = JSON.parse(localStorage.getItem("users"));

    if (checkLogin != null) {

        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {

                document.getElementById("registerUser").style.color = "rgba(11, 138, 235, 0.942)";
                document.getElementById("logout").style.display = "block";
                document.getElementById("loginRegister").style.display = "none";

                if (users[i].email == "vuonglan0861@gmail.com" && users[i].password == "12345") {
                    document.getElementById("addmin").style.display = "block";
                    document.getElementById("cart").style.display = "none";

                }
                else {
                    document.getElementById("addmin").style.display = "none";
                    document.getElementById("cart").style.display = "block";
                }

            }
        }
    } else {
        document.getElementById("logout").style.display = "none";
        document.getElementById("loginRegister").style.display = "block";
    }
}
window.onload = IsLogged;

// ===========Seach================


let modalSearch = document.querySelector("#search-navbar");
let closeBtn = document.querySelector(".close-btn");
// funtion hiện animetion search
function openSearch() {
    modalSearch.classList.add("active");
}
// funtion ẩn animetion search
function closeSearch() {
    modalSearch.classList.remove("active");
}

// funtion seach product
function searchProduct() {
    // let products = JSON.parse(localStorage.getItem("productList"));
    let inputValue = document.getElementById("search").value;
    let result = products.filter((item) => {
        return item.name.indexOf(inputValue) != -1;
    })

    let seachResult = document.getElementById("search-result");
    seachResult.innerHTML = ``
    if (result.length != 0) {
        result.forEach(element => {
            let div = document.createElement("div");
            div.innerHTML = `
            <div id="product-image" class="product-image">
            <div class="d-flex justify-content-between">
            <img src="${element.src}">
                <ul>
                    <li>
                        SHIZEN
                        <p class="fw-bolder">${element.name}</p>
                    </li>
                    <li>
                    ${VND.format(element.price)}
                    </li>
                </ul>
            </div>
            </div>
            `
            seachResult.appendChild(div);
        });
    }
    else {
        renderProducts();

    }
}









