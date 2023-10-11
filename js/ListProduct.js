
// ===================Header Area========================
// let randomText;
// let texts = [
//     "Enjoy a free gift with your purchase",
//     "Terms & Conditions apply.",
//     "Carbon neutral shipping on all orders",
//     "Free shipping on orders over 25USD",
// ]

// // Function để hiển thị ngẫu nhiên các phần tử trong mảng texts
// function renderText() {
//     const randomIndex = Math.floor(Math.random() * texts.length); // Lấy một chỉ số ngẫu nhiên
//     randomText = texts[randomIndex]; // Lấy văn bản tương ứng với chỉ số ngẫu nhiên
//     document.getElementById("headerText").textContent = randomText; // Hiển thị văn bản ngẫu nhiên
// }

// // Gọi hàm renderText mỗi giây
// setInterval(renderText, 3000);



// // Khi người dùng nhấn vào icon user 
// document.querySelector('.fa-user').onclick = () => {
//     document.querySelector('.login-register').classList.toggle('active')
// }

// window.onscroll = () => {
//     document.querySelector('.login-register').classList.remove('active')
// }




// // Hàm kiểm tra xem user đã login hay chưa
// function IsLogged() {
//     let userId = localStorage.getItem("userId");
//     if (userId !== null) {
//         document.getElementById("registerUser").style.color = "rgba(11, 138, 235, 0.942)";

//         document.getElementById("logout").style.display = "block";
//         document.getElementById("loginRegister").style.display = "none";
//     } else {
//         document.getElementById("logout").style.display = "none";
//         document.getElementById("loginRegister").style.display = "block";
//     }
// }
// // IsLogged();
// window.onload = IsLogged;




// ========================Main Area==========================
//2. Đổ danh sách Fliter by bằng js
// let filterByList = [{
//     concern: ["Dullness", "Texttural Irregularities", "Signs Of Aging", "Dryness", "Uneven Skin Tone", "", "Puffiness", "Dark Circles", "Visible Shine", "Crow's Feet", "Cleansing", "Look Of Redness", "Signs Of Congestion"],
//     ingredient: ["Peptides", "Hydrators", "Niaciamide", "Hyaluronic Acid", "Squalane"],
//     productType: ["serums", "tones", "Facial Cleansers"],
//     timeOfUse: ["AM", "PM"],
// }];
// // Lưu filterByList lên local
// localStorage.setItem("filterByList", JSON.stringify(filterByList));
// let filters = JSON.parse(localStorage.getItem("filterByList"));
// let concernList = document.getElementById("multiCollapseExample1");
// let ingredientList = document.getElementById("collapseExample");
// let productTypeList = document.getElementById("multiCollapseExample2");
// let timeOfUseList = document.getElementById("multiCollapseExample3");

// for (let i = 0; i < filterByList.length; i++) {
//     for (let j = 0; j < concern.length; j++) {
//         filterByList[0].concern.forEach(item => {
//             concernList.innerHTML = `
// <label for="item2"><input type="checkbox" id="item2" name="items" value="Item 2">${filterByList[i].concern[j]}</label><br>
// `
//         });

//     }


// }





//2. Đổ danh sách sản phẩm bằng js

// function hiển thị danh sách sản phẩm

// Đơn vị tiền tệ
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

let productList = [
    {
        name: "Natural Moisturizing Factors + HA",
        price: 6,
        id: 1,
        src: "../assest/image/the-or1.webp",
        stock: 15,
        target: "Dryness",
        suited: "All Skin Types",
        concern: ["Dullness", "Texttural Irregularities"],
        ingredient: ["Peptides", "Niaciamide"],
        productType: "serums",
        timeOfUse: ["PM"]
    },
    {
        name: "Hyaluronic Acid 2% + B5",
        price: 9,
        id: 2,
        src: "../assest/image/the-or2.webp",
        stock: 20,
        target: "Dryness",
        suited: "All Skin Types",
        concern: ["Signs Of Aging", "Crow's Feet", "Cleansing"],
        ingredient: ["Hydrators", "Hyaluronic Acid"],
        productType: "tones",
        timeOfUse: ["PM"]
    },
    {
        name: "Glycolic Acid 7% Toning Solution",
        price: 7,
        id: 3,
        src: "../assest/image/the or-3.webp",
        stock: 13,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: ["look Of Redness", "Uneven Skin Tone"],
        ingredient: ["Squalane"],
        productType: "Moisturizers",
    },
    {
        name: "Squalane Cleanser",
        price: 9,
        id: 4,
        src: "../assest/image/the-or4.webp",
        stock: 7,
        target: "Cleansing",
        suited: "All Skin Types",
        concern: ["look Of Redness", "Uneven Skin Tone"],
        ingredient: ["Peptides", "Hydrators", "Niaciamide"],
        productType: "Facial Cleansers",
        timeOfUse: ["AM", "PM"]
    },
    {
        name: "Niacinamide 10% + Zinc 1%",
        price: 6,
        id: 5,
        src: "../assest/image/the-or5.webp",
        stock: 3,
        target: "Textural Irregularities",
        suited: "All Skin Types",
        concern: ["Visible Shine", "look Of Redness"],
        ingredient: ["Hyaluronic Acid", "Hydrators"],
        productType: "tones",
        timeOfUse: ["AM", "PM"]
    },
    {
        name: "Niacinamide 10% + Zinc 1%",
        price: 17,
        id: 6,
        src: "../assest/image/the-or6.webp",
        stock: 3,
        target: "Textural Irregularities",
        suited: "All Skin Types",
        concern: ["Dryness", "Puffiness"],
        ingredient: ["Peptides", "Hydrators", "Niaciamide"],
        productType: "serums",
        timeOfUse: ["AM", "PM"]
    },
    {
        name: "Azelaic Acid Suspension 10%",
        price: 11,
        id: 7,
        src: "../assest/image/the-or7.webp",
        stock: 13,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: ["look Of Redness", "Crow's Feet"],
        ingredient: ["Niaciamide", "Hyaluronic Acid", "Squalane"],
        productType: "tones",
        timeOfUse: ["AM", "PM"]
    },
    {
        name: "Multi-Peptide Eye Serum",
        price: 25,
        id: 8,
        src: "../assest/image/the-or8.webp",
        stock: 7,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: ["Uneven Skin Tone", "Visible Shine"],
        ingredient: ["Peptides", "Hydrators", "Niaciamide", "Hyaluronic Acid"],
        productType: "serums",
        timeOfUse: ["AM"]
    },
    {
        name: "Multi-Peptide + Copper Peptides 1% Serum",
        price: 30,
        id: 9,
        src: "../assest/image/the-od9.webp",
        stock: 9,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: ["Crow's Feet", "Signs Of Congestion"],
        ingredient: ["Squalane", "Hyaluronic Acid"],
        productType: "serums",
        timeOfUse: ["AM", "PM"]
    },
    {
        name: "Core Regimen",
        price: 30,
        id: 10,
        src: "../assest/image/NIOD1.jpeg",
        stock: 9,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: ["Crow's Feet", "Signs Of Congestion"],
        ingredient: ["Squalane", "Hyaluronic Acid"],
        productType: "serums",
        timeOfUse: ["AM", "PM"]
    },
    {
        name: "Support Regimen",
        price: 25,
        id: 11,
        src: "../assest/image/NIOD02.jpeg",
        stock: 7,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: ["Uneven Skin Tone", "Visible Shine"],
        ingredient: ["Peptides", "Hydrators", "Niaciamide", "Hyaluronic Acid"],
        productType: "serums",
        timeOfUse: ["AM", "PM"]
    },
    {
        name: "Survival",
        price: 17,
        id: 12,
        src: "../assest/image/NIOD03.jpeg",
        stock: 3,
        target: "Textural Irregularities",
        suited: "All Skin Types",
        concern: ["Dryness", "Puffiness"],
        ingredient: ["Peptides", "Hydrators", "Niaciamide"],
        productType: "serums",
        timeOfUse: ["AM", "PM"]
    },
    {
        name: "Yesti",
        price: 15,
        id: 13,
        src: "../assest/image/NIOD04.jpeg",
        stock: 15,
        target: "Dryness",
        suited: "All Skin Types",
        concern: ["Dullness", "Texttural Irregularities"],
        ingredient: ["Peptides", "Niaciamide"],
        productType: "serums",
        timeOfUse: ["AM"]
    },
    {
        name: "Shizen Sets",
        price: 40,
        id: 14,
        src: "../assest/image/NIOD05.jpeg",
        stock: 3,
        target: "Textural Irregularities",
        suited: "All Skin Types",
        concern: ["Dryness", "Puffiness"],
        ingredient: ["Peptides", "Hydrators", "Niaciamide"],
        productType: "serums",
        timeOfUse: ["AM", "PM"]
    },
    {
        name: "Eye",
        price: 25,
        id: 15,
        src: "../assest/image/NIOD06.jpeg",
        stock: 7,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: ["Uneven Skin Tone", "Visible Shine"],
        ingredient: ["Peptides", "Hydrators", "Niaciamide", "Hyaluronic Acid"],
        productType: "serums",
        timeOfUse: ["AM", "PM"]
    },





];



// Lưu sản phẩm trên local
localStorage.setItem("productList", JSON.stringify(productList));
let products = JSON.parse(localStorage.getItem("productList"));
function renderProducts(productList) {
    if (productList == undefined) {
        productList = [];
    }
    let text = "";
    for (let i = 0; i < productList.length; i++) {
        text +=
            `
            <div class="grid-item">
                <img src="${productList[i].src}" alt="">
                <p>${productList[i].name}</p>
                <p> ${VND.format(productList[i].price)} </p>
                <i onclick="addToCart(${productList[i].id})" class="fa-solid fa-cart-arrow-down"></i>
                <hr>
                <ul>
                    <li>
                        <span>Target:</span>
                        <span>${productList[i].target}</span>
                    </li>
                    <li>
                        <span>Suited to:</span>
                        <span>${productList[i].suited}</span>
                    </li>
                </ul>
            </div>
   `
    }
    document.getElementsByClassName("grid-container")[0].innerHTML = text
}
renderProducts(products);
// Function đi mua hàng
function addToCart(productId) {
    // console.log("productId", productId);
    let checkLogin = localStorage.getItem("userId");
    // biến checkLogin có giá trị là id của người dùng
    // lấy toàn bộ users ra
    let users = JSON.parse(localStorage.getItem("users"));
    // lấy toàn bộ danh sách sản phẩm
    let products = JSON.parse(localStorage.getItem("productList"));
    if (checkLogin) {
        // đã đăng nhập mới cho đi mua hàng
        // đi mua hàng dựa vào userId 
        // alert("đi mua hàng bình thường!")
        // mình có nhiều user thì phải lấy ra giỏ của user có id == checkLogin
        /*   let cartUser=users.filter((item)=>{
              return item.id==checkLogin;
          })
          console.log("cartUser", cartUser); */
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                // lấy ra giỏ hàng của user vừa đăng nhập
                //users[i].cart
                for (let j = 0; j < products.length; j++) {
                    if (products[j].id == productId) {
                        //... toán tử spread
                        // trước khi push phải xem sản phẩm đó đã có trong giỏ hàng hay chưa
                        // nếu có rồi thì tăng số lượng thôi.
                        // chưa có thì push vào bình thường
                        // users[i].cart.push({ ...products[j],quantity:1 });
                        // localStorage.setItem("users",JSON.stringify(users));
                        let result = users[i].cart.filter((item) => {
                            return item.id == productId;
                        })
                        if (result.length == 0) {
                            users[i].cart.push({ ...products[j], quantity: 1 });
                            localStorage.setItem("users", JSON.stringify(users));
                            showCount();
                        } else {
                            // users[i].cart[j].quantity == ++users[i].cart[j].quantity;
                            // localStorage.setItem("users", JSON.stringify(users));
                            for (let k = 0; k < users[i].cart.length; k++) {
                                if (users[i].cart[k].id == productId) {
                                    users[i].cart[k].quantity = ++users[i].cart[k].quantity;
                                    localStorage.setItem("users", JSON.stringify(users));
                                    showCount();
                                    break;
                                }
                            }
                        }
                    }
                }
            }

        }
    } else {
        // chưa đăng nhập không thể mua hàng
        alert("bạn phải đăng nhập để đi mua hàng!")
    }
}

// function render count
function showCount() {
    let checkLogin = localStorage.getItem("userId");
    let users = JSON.parse(localStorage.getItem("users"));
    if (checkLogin) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                //users[i].cart
                let count = 0;
                for (let j = 0; j < users[i].cart.length; j++) {
                    count += users[i].cart[j].quantity;
                }
                document.getElementsByClassName("count")[0].innerHTML = count;
            }
        }

    }
}
showCount();

// function sắp xếp giá từ thấp đến cao

function myFunction(lan) {
    let x = lan.value;
    console.log(x);
    if (x === "lowest") {
        productList.sort((a, b) => a.price - b.price);
        let text = "";
        for (let i = 0; i < productList.length; i++) {
            text +=
                `
            <div class="grid-item">
                <img src="${productList[i].src}" alt="">
                <p>${productList[i].name}</p>
                <p> ${VND.format(productList[i].price)} </p>
                <i onclick="addToCart(${productList[i].id})" class="fa-solid fa-cart-arrow-down"></i>
                <hr>
                <ul>
                    <li>
                        <span>Target:</span>
                        <span>${productList[i].target}</span>
                    </li>
                    <li>
                        <span>Suited to:</span>
                        <span>${productList[i].suited}</span>
                    </li>
                </ul>
            </div>
   `
        }
        document.getElementsByClassName("grid-container")[0].innerHTML = text;
    } else if (x === "highest") {
        productList.sort((a, b) => b.price - a.price);
        let text = "";
        for (let i = 0; i < productList.length; i++) {
            text +=
                `
                <div class="grid-item">
                    <img src="${productList[i].src}" alt="">
                    <p>${productList[i].name}</p>
                    <p> ${VND.format(productList[i].price)} </p>
                    <i onclick="addToCart(${productList[i].id})" class="fa-solid fa-cart-arrow-down"></i>
                    <hr>
                    <ul>
                        <li>
                            <span>Target:</span>
                            <span>${productList[i].target}</span>
                        </li>
                        <li>
                            <span>Suited to:</span>
                            <span>${productList[i].suited}</span>
                        </li>
                    </ul>
                </div>
       `
        }
        document.getElementsByClassName("grid-container")[0].innerHTML = text;
    }

}

// funcion Lọc sản phẩm

