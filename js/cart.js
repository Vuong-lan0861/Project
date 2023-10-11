
// =======================Main Area================================


// convert định dạng tiền tệ
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
function renderCart() {
    let checkLogin = localStorage.getItem("usersId");
    console.log(checkLogin);
    let users = JSON.parse(localStorage.getItem("users"));
    if (checkLogin != null) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                //cart user[i].cart

                let subtotal = 0;
                let text = "";
                let total = 0;
                let ship = 0;
                for (let j = 0; j < users[i].cart.length; j++) {
                    subtotal += users[i].cart[j].price * users[i].cart[j].quantity;
                    if (subtotal > 25) {
                        ship = 0;
                        total = subtotal + ship;
                    } else if (subtotal > 0 && subtotal <= 25) {
                        ship = 5;
                        total = subtotal + ship;
                    }
                    else {
                        ship = 0;
                        total = subtotal + ship;
                    }
                    text +=
                        `
                        <div id="product-image" class="product-image">
                        <div class="d-flex justify-content-between">
                        <img src="${users[i].cart[j].src}">
                            <ul>
                                <li>
                                    SHIZEN
                                    <p class="fw-bolder">${users[i].cart[j].name}</p>
                                </li>
                                <li>
                                ${VND.format(users[i].cart[j].price)}
                                </li>
                            </ul>
                        </div>
                        <div class="product-quantity">
                            <div class="quantity-btn">
                                <i onclick="cartMinus(${users[i].cart[j].id})" class="fa-solid fa-minus"></i>
                                <span class="quantity"> ${users[i].cart[j].quantity}</span>
                                <i onclick="cartPlus(${users[i].cart[j].id})" class="fa-solid fa-plus"></i>
                            </div>
                            <p class="product-price">${VND.format(users[i].cart[j].price * users[i].cart[j].quantity)}</p>
                            <button onclick="cartRemove(${users[i].cart[j].id})" type="button" class="btn btn-link">Remove</button>
                        </div>
                        </div>
                        `
                }

                document.getElementById("main-left-cart").innerHTML =
                    `
                    ${text}
                `
                document.getElementById("main-right-total").innerHTML = `
                
                            <div class="d-flex justify-content-between">
                                <p>Merchandise subtotal</p>
                                <p class="subtotal">${VND.format(subtotal)}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Shipping & Handling</p>
                           
                                <p class="shiptotal">${VND.format(ship)}</p>
                            </div>
                
                        <div class="d-flex justify-content-between">
                            <div class="fw-bolder">Estimated Total</div>
                      
                            <div class="total fw-bolder">${VND.format(total)}</div>
                        </div>
                `
            }

        }

    }
}
renderCart();

// function tăng số lượng sản phẩm
function cartPlus(productId) {
    // console.log("1111", productId);
    let checkLogin = localStorage.getItem("userId");
    let users = JSON.parse(localStorage.getItem("users"));
    if (checkLogin != null) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                for (let j = 0; j < users[i].cart.length; j++) {
                    if (users[i].cart[j].id == productId) {
                        users[i].cart[j].quantity == ++users[i].cart[j].quantity;
                        localStorage.setItem("users", JSON.stringify(users));
                        renderCart();
                    }

                }
            }
        }
    }

}
// Function giảm số lượng sản phẩm
function cartMinus(productId) {
    // console.log("1111", productId);
    let checkLogin = localStorage.getItem("userId");
    let users = JSON.parse(localStorage.getItem("users"));
    if (checkLogin != null) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                for (let j = 0; j < users[i].cart.length; j++) {
                    if (users[i].cart[j].id == productId) {
                        if (users[i].cart[j].quantity > 1) {
                            users[i].cart[j].quantity == --users[i].cart[j].quantity;
                        }
                        localStorage.setItem("users", JSON.stringify(users));
                        renderCart();
                    }

                }
            }
        }
    }

}
// Function xoá sản phẩm
function cartRemove(productId) {
    // console.log("1111", productId);
    let checkLogin = localStorage.getItem("userId");
    let users = JSON.parse(localStorage.getItem("users"));
    if (checkLogin != null) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                for (let j = 0; j < users[i].cart.length; j++) {
                    if (users[i].cart[j].id == productId) {
                        users[i].cart.splice(users[i].cart[j], 1);
                        localStorage.setItem("users", JSON.stringify(users));
                        renderCart();
                    }
                }
            }
        }
    }

}






