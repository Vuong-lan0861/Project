

// ==================MAIN AREA==============================
// Hiển thị danh sách người dùng


function renderUsers() {
  let checkUser = localStorage.getItem("users");
  let users = JSON.parse(checkUser);
  document.getElementById("addmin-users-thead").innerHTML = `
    <th scope="col">cd</th>
    <th scope="col">email</th>
    <th scope="col">Full Name</th>
    <th scope="col">Phone Number</th>
    <th scope="col">Delete</th>
    `

  let text = "";
  for (let i = 0; i < users.length; i++) {
    text += `
            <tr>
            <td scope="col">${i + 1}</td>
            <td>${users[i].email}</td>
            <td>${users[i].displayName}</td>
            <td>${users[i].phone}</td>
            <td>
                <i onclick = "deleteUsers(${users[i].id})" class="fa-solid fa-trash-can"></i>
            </td>
        </tr>
        
            `
  }
  document.getElementById("renderUsers").innerHTML =
    `
        ${text}
        `
}


//  Hiển thị danh sách sản phẩm

// const VND = new Intl.NumberFormat('vi-VN', {
//   style: 'currency',
//   currency: 'VND',
// });

function renderProducts() {
  let products = JSON.parse(localStorage.getItem("productList"));


  document.getElementById("addmin-users-thead").innerHTML = `
        <th scope="col">cd</th>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Target</th>
        <th scope="col">Suited to</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Action</th>
        `


  let text = "";
  for (let i = 0; i < products.length; i++) {

    text += `
                
                    <tr>
                        <td scope="col">${i + 1}</td>
                        <td><img src="${products[i].src}" alt=""></td>
                        <td>${products[i].name}</td>
                        <td>${products[i].target}</td>
                        <td>${products[i].suited}</td>
                        <td>${VND.format(products[i].price)}</td>
                        <td>${products[i].stock}</td>
                        <td>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                        <i onclick="updateProduct(${products[i].id})" class="fa-solid fa-pen-to-square"></i>
                        </button>
<div class="js-modal modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Price</label>
            <input type="text" class="form-control price" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Stock</label>
            <input type="text" class="form-control stock" id="recipient-name1">
          </div>
          
          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onclick = "saveUpdateProduct(${products[i].id})" type="button" class="js-btn-save btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
                            <i onclick = "deleteProducts(${products[i].id})" class="fa-solid fa-trash-can"></i>
                        </td>
                    </tr>
                
                `
  }
  document.getElementById("renderUsers").innerHTML =
    `
            ${text}
            `

}
// Thêm chức năng xoá users theo id
function deleteUsers(userId) {
  let users = JSON.parse(localStorage.getItem("users"));
  // Tìm vị trí sản phẩm trong danh sách
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    // Xoá sản phẩm khỏi danh sách
    users.splice(userIndex, 1);
    // Cập nhật lại danh sách trong localStorage
    localStorage.setItem("users", JSON.stringify(users));
    // Render lại danh sách sản phẩm
    renderUsers();
  }
}

// Thêm chức năng xoá sản phẩm theo id
function deleteProducts(productId) {
  let products = JSON.parse(localStorage.getItem("productList"));
  // Tìm vị trí sản phẩm trong danh sách
  let productIndex = products.findIndex(product => product.id === productId);
  if (productIndex !== -1) {
    // Xoá sản phẩm khỏi danh sách
    products.splice(productIndex, 1);
    // Cập nhật lại danh sách trong localStorage
    localStorage.setItem("productList", JSON.stringify(products));
    // Render lại danh sách sản phẩm
    renderProducts();
  }
}
// function chỉnh sửa product theo id

function updateProduct(productId) {

  localStorage.setItem("keyEdit", productId)
  let products = JSON.parse(localStorage.getItem("productList"));

  // Tìm vị trí sản phẩm trong danh sách
  let productIndex = products.findIndex(product => product.id === productId);
  let price = document.getElementsByClassName("price")[0];
  price.value = products[productIndex].price;
  let stock = document.getElementsByClassName("stock")[0];
  stock.value = products[productIndex].stock;
 
}

// FUNCTION SAVE EDIT

function saveUpdateProduct(productId) {
  let products = JSON.parse(localStorage.getItem("productList"));
  let keyEdit = localStorage.getItem("keyEdit");
  let price = document.getElementsByClassName("price")[0].value;
  let stock = document.getElementsByClassName("stock")[0].value;
  if (keyEdit != null) {
    
    let productIndex = products.findIndex(product => product.id == keyEdit);
    products[productIndex].stock = stock;
    products[productIndex].price = price;


    localStorage.setItem("productList", JSON.stringify(products));


  }
  let show = document.getElementsByClassName("show");
  for (let i = 0; i < show.length; i++) {
    show[i].style.display = "none";
  }


  renderProducts();
  
}