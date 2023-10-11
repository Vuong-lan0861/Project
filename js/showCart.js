function addToCart(productId) {
    // console.log("productId", productId);
    let checkLogin = localStorage.getItem("usersId");
    // biến checkLogin có giá trị là id của người dùng
    // lấy toàn bộ users ra
    let users = JSON.parse(localStorage.getItem("users"));
    // lấy toàn bộ danh sách sản phẩm
    let products = JSON.parse(localStorage.getItem("productList"));
    if (checkLogin) {

        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                // lấy ra giỏ hàng của user vừa đăng nhập
                //users[i].cart
                for (let j = 0; j < products.length; j++) {
                    if (products[j].id == productId) {
                        let result = users[i].cart.filter((item) => {
                            return item.id == productId;
                        })

                        if (result.length == 0) {
                            // users[i].cart.push({ ...products[j], quantity: 1 });
                            products[j].quantity = 1;
                            users[i].cart.push(products[j])
                            localStorage.setItem("users", JSON.stringify(users));

                            showCount();
                        } else {
                            for (let k = 0; k < users[i].cart.length; k++) {
                                if (users[i].cart[k].id == productId) {

                                    // users[i].cart[k].quantity = ++users[i].cart[k].quantity;
                                    users[i].cart[k].quantity++;
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


function showCount() {
    let checkLogin = localStorage.getItem("usersId");
    let users = JSON.parse(localStorage.getItem("users"));

    if (checkLogin) {

        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                console.log("gfhgj")
                let count = 0;
                for (let j = 0; j < users[i].cart.length; j++) {
                    count += users[i].cart[j].quantity;
                   
                }
                document.querySelector(".js-count").innerHTML = count;
            }
        }
    }
}
showCount();

