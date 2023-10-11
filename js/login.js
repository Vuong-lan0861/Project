

// ========================Main area==================================


function login(event) {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "" || password === "") {
        
        document.getElementById("lack").style.display = "block";
        document.getElementById("success").style.display = "none";
        document.getElementById("error").style.display = "none";

    } else {
        for (let i = 0; i < users.length; i++) {

            if (users[i].email == email && users[i].password == password) {
                localStorage.setItem("usersId", users[i].id)

                // Khi đăng kí thành công thì hiển thị "bạn đã đăng kí thanhf công"
                document.getElementById("success").style.display = "block";
                document.getElementById("lack").style.display = "none";
                document.getElementById("error").style.display = "none";

                // Khi đăng kí thành công chuyển sang trang đăng nhập
                setTimeout(() => { window.location.href = "../index.html" }, 2000);
                break;
            } else {
                document.getElementById("error").style.display = "block";
                document.getElementById("lack").style.display = "none";
                document.getElementById("success").style.display = "none";
            }
        }
    }




    // users.forEach(user => {

    //     if (user.email == email && user.password == password) {
    //         localStorage.setItem("userId", user.id)
    //         // Khi đăng kí thành công thì hiển thị "bạn đã đăng kí thanhf công"
    //         document.getElementById("success").style.display = "block";
    //         document.getElementById("lack").style.display = "none !important";
    //         document.getElementById("error").style.display = "none";

    //         // Khi đăng kí thành công chuyển sang trang đăng nhập
    //         // setTimeout(() => { window.location.href = "../index.html" }, 2000);

    //     } else {
    //         document.getElementById("error").style.display = "block";
    //         document.getElementById("lack").style.display = "none";
    //         document.getElementById("success").style.display = "none";
    //     }

    // });


}