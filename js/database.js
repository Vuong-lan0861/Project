let users = [
    {
        id: 1,
        displayName: "Nguyen Van A",
        email: "nguyen_a@gmail.com",
        password: "12345",
        phone: "01667400342",
        isLoked: false,
        role: "admin",
    },
    {
        id: 2,
        displayName: "Nguyen Van B",
        email: "nguyen_b@gmail.com",
        password: "11111",
        phone: "0116768924",
        isLoked: false,
        role: "user",
    },
    {
        id: 3,
        displayName: "Nguyen Van C",
        email: "nguyen_c@gmail.com",
        password: "22222",
        phone: "08060626139",
        isLoked: false,
        role: "user",
    },
];
let categories = [
    {
        id: 1,
        categoryName: "book",
    },
    {
        id: 2,
        categoryName: "smart phone",
    }
]
let products = [
    {
        id: 1,
        categoryId: 1,
        userId: 2,
        productName: "kiemHiep",
        productQuantity: 100,
        productPrice: 20000,
        image: "",
        isSellOut: false,
    },
    {
        id: 2,
        categoryId: 2,
        userId: 2,
        productName: "iphone14",
        productQuantity: 200,
        productPrice: 120000,
        image: "",
        isSellOut: false,
    },
    {
        id: 3,
        categoryId: 2,
        userId: 3,
        productName: "iphone15",
        productQuantity: 200,
        productPrice: 150000,
        image: "",
        isSellOut: false,
    }


];

// Hàm lưu Data vào locol 
function insertDataToLocalStorage() {
    try {
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("categories", JSON.stringify(categories));
        localStorage.setItem("products", JSON.stringify(products));
        console.log("Đã lưu vào locastorage thành công")
    } catch (error) {
        console.log(error);
    }
}
// Lấy Users tương ứng
let userId = 3;
function getProductByUserId() {
    for (let i = 0; i < products.length; i++) {
            if (products[i].userId == userId) {
                console.log(products[i]);
            }      
    }
}
// Tìm sản phẩm bằng categoryId
let categoryId = 1;
function getProductByCategoryId() {
    for (let i = 0; i < categories.length; i++) {
        if (products[i].categoryId  == categoryId) {
            console.log(products[i]);
        }
        
    }
} 



