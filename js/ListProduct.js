
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
// const VND = new Intl.NumberFormat('vi-VN', {
//     style: 'currency',
//     currency: 'VND',
// });

let productList = [
    {
        name: "Natural Moisturizing Factors + HA",
        price: 6,
        id: 1,
        src: "../assest/image/the-or1.webp",
        stock: 15,
        target: "Dryness",
        suited: "All Skin Types",
        concern: "Dullness",
        ingredient: "Peptides",
        productType: "serums",
        timeOfUse: "PM",
    },
    {
        name: "Hyaluronic Acid 2% + B5",
        price: 9,
        id: 2,
        src: "../assest/image/the-or2.webp",
        stock: 20,
        target: "Dryness",
        suited: "All Skin Types",
        concern: "Crow's Feet",
        ingredient: "Hyaluronic Acid",
        productType: "tones",
        timeOfUse: "PM"
    },
    {
        name: "Glycolic Acid 7% Toning Solution",
        price: 7,
        id: 3,
        src: "../assest/image/the or-3.webp",
        stock: 13,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: "Uneven Skin Tone",
        ingredient: "Squalane",
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
        concern: "Uneven Skin Tone",
        ingredient: "Niaciamide",
        productType: "Facial Cleansers",
        timeOfUse: "PM",
    },
    {
        name: "Niacinamide 10% + Zinc 1%",
        price: 6,
        id: 5,
        src: "../assest/image/the-or5.webp",
        stock: 3,
        target: "Textural Irregularities",
        suited: "All Skin Types",
        concern: "look Of Redness",
        ingredient: "Hyaluronic Acid",
        productType: "tones",
        timeOfUse: "AM",
    },
    {
        name: "Niacinamide 10% + Zinc 1%",
        price: 17,
        id: 6,
        src: "../assest/image/the-or6.webp",
        stock: 3,
        target: "Textural Irregularities",
        suited: "All Skin Types",
        concern: "Dryness",
        ingredient: "Peptides",
        productType: "serums",
        timeOfUse: "AM & PM",
    },
    {
        name: "Azelaic Acid Suspension 10%",
        price: 11,
        id: 7,
        src: "../assest/image/the-or7.webp",
        stock: 13,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: "Crow's Feet",
        ingredient: "Niaciamide",
        productType: "tones",
        timeOfUse: "PM",
    },
    {
        name: "Multi-Peptide Eye Serum",
        price: 25,
        id: 8,
        src: "../assest/image/the-or8.webp",
        stock: 7,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: "Visible Shine",
        ingredient: "Hyaluronic Acid",
        productType: "serums",
        timeOfUse: "AM",
    },
    {
        name: "Multi-Peptide + Copper Peptides 1% Serum",
        price: 30,
        id: 9,
        src: "../assest/image/the-od9.webp",
        stock: 9,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: "Crow's Feet",
        ingredient: "Hyaluronic Acid",
        productType: "serums",
        timeOfUse: "PM",
    },
    {
        name: "Core Regimen",
        price: 30,
        id: 10,
        src: "../assest/image/NIOD1.jpeg",
        stock: 9,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: "Signs Of Congestion",
        ingredient: "Squalane",
        productType: "serums",
        timeOfUse: "AM & PM",
    },
    {
        name: "Support Regimen",
        price: 25,
        id: 11,
        src: "../assest/image/NIOD02.jpeg",
        stock: 7,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: "Uneven Skin Tone",
        ingredient: "Hyaluronic Acid",
        productType: "serums",
        timeOfUse: "PM",
    },
    {
        name: "Survival",
        price: 17,
        id: 12,
        src: "../assest/image/NIOD03.jpeg",
        stock: 3,
        target: "Textural Irregularities",
        suited: "All Skin Types",
        concern: "Puffiness",
        ingredient: "Hydrators",
        productType: "serums",
        timeOfUse: "PM"
    },
    {
        name: "Yesti",
        price: 15,
        id: 13,
        src: "../assest/image/NIOD04.jpeg",
        stock: 15,
        target: "Dryness",
        suited: "All Skin Types",
        concern: "Texttural Irregularities",
        ingredient: "Peptides",
        productType: "serums",
        timeOfUse: "AM",
    },
    {
        name: "Shizen Sets",
        price: 40,
        id: 14,
        src: "../assest/image/NIOD05.jpeg",
        stock: 3,
        target: "Textural Irregularities",
        suited: "All Skin Types",
        concern: "Puffiness",
        ingredient: "Hydrators",
        productType: "serums",
        timeOfUse: "PM",
    },
    {
        name: "Eye",
        price: 25,
        id: 15,
        src: "../assest/image/NIOD06.jpeg",
        stock: 7,
        target: "Signs Of Aging",
        suited: "All Skin Types",
        concern: "Uneven Skin Tone",
        ingredient: "Hyaluronic Acid",
        productType: "serums",
        timeOfUse: "PM",
    },

];



// Lưu sản phẩm trên local
let products = JSON.parse(localStorage.getItem("productList"));
if (products == null) {
    localStorage.setItem("productList", JSON.stringify(productList));
}

function renderProducts(productList) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
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
                <i onclick="addToCart(${productList[i].id})" class="fa-solid fa-cart-arrow-down "></i>
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
renderProducts(products);



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

//  Funtion Filter

function pickCategoly() {
    let concern = document.querySelectorAll(".concern");
    let activeIngredient = document.querySelectorAll(".active-ingredient");
    let productType = document.querySelectorAll(".product-type");
    let timeOfUse = document.querySelectorAll(".time-of-use");
    let selecttedConcern = [];
    let selecttedActiveIngredient = [];
    let selecttedProductType = [];
    let selecttedTimeOfUse = [];

    concern.forEach(checkbox => {
        if (checkbox.checked) {
            selecttedConcern.push(checkbox.value);
        }
    })
    activeIngredient.forEach(checkbox => {
        if (checkbox.checked) {
            selecttedActiveIngredient.push(checkbox.value);
        }
    })
    productType.forEach(checkbox => {
        if (checkbox.checked) {
            selecttedProductType.push(checkbox.value);
        }
    })
    timeOfUse.forEach(checkbox => {
        if (checkbox.checked) {
            selecttedTimeOfUse.push(checkbox.value);
        }
    })

    if (selecttedConcern.length == 0
        && selecttedActiveIngredient.length == 0
        && selecttedProductType.length == 0
        && selecttedTimeOfUse.length == 0) {
        renderProducts(products);
    } else {
        let filteredProducts = products.filter((product) => {
            let concernResult = selecttedConcern == 0 ||
                selecttedConcern.includes(product.concern);
            let activeIngredientResult = selecttedActiveIngredient == 0 ||
                selecttedActiveIngredient.includes(product.ingredient);
            let productTypeResult = selecttedProductType == 0 ||
                selecttedProductType.includes(product.productType);
            let timeOfUseResult = selecttedTimeOfUse == 0 ||
                selecttedTimeOfUse.includes(product.timeOfUse);
            return concernResult && activeIngredientResult && productTypeResult && timeOfUseResult;
        })
        renderProducts(filteredProducts);
    }
}