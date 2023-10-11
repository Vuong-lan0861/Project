// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);
// const dataValue = params.get('status');
// if(dataValue === "logout"){
//     localStorage.removeItem("userId");
// }

let logOut = () => {
    console.log("gvhhhh");
    // let checkLoginAdmin = localStorage.getItem('adminId');
    // let checkLogin = localStorage.getItem('userId');
    // let users = JSON.parse(localStorage.getItem('users'));
    // if (checkLogin) {
    //     localStorage.removeItem('userId');
    // }
      
            localStorage.removeItem("currentUser");
            document.getElementById("registerUser").style.color = "white";
            window.location.href = "../pages/login.html";
            
}