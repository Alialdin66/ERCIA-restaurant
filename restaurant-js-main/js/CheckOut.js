
// 
const cartItemsEl = document.getElementById("cartItems");
const totalItemsInCart = document.getElementById("quantity");
const totalPriceEl = document.getElementById("totalPrice");
const checkoutButton = document.getElementById("checkoutButton");



let cart = JSON.parse(localStorage.getItem("CART")) || [];

function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
    <tr>
        <td><img src="${item.image}" width="80px" alt=""></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
          <a href="#" class="cart__remove" onclick="removeItemFromCart('${item.id}')">
          <i class="fa-solid fa-trash"></i>
          </a>
        </td>
    </tr>
        `;
  });
  renderSubtotal();
}

function renderSubtotal() {
  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    totalItems += item.numberOfUnits;
    totalPrice += item.price * item.numberOfUnits;
  });

  totalItemsInCart.innerHTML = `(${totalItems})`;
  totalPriceEl.innerHTML = `Total: $${totalPrice}`;
}

function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id != id);

  localStorage.setItem("CART", JSON.stringify(cart));
  renderCartItems();
}

function checkout() {
  // Perform checkout logic here (e.g., payment processing, order confirmation)

  // Clear the cart after successful checkout
  cart = [];
  localStorage.setItem("CART", JSON.stringify(cart));
  renderCartItems();
}

// Event listener for the checkout button
checkoutButton.addEventListener("click", checkout);

// Initial rendering of cart items
renderCartItems();

const fname= document.getElementById("fname");
const email = document.getElementById("email");
const adr = document.getElementById("adr");
const city= document.getElementById("city");

let popup=document.getElementById("popup")
function openPopup(){
  if(fname.value==''||email.value==''||adr.value==''||city.value==''){
    alert('please enter your info')
  }else{
  popup.classList.add("open-popup");}
}
function closePopup(){
  popup.classList.remove("open-popup");
}