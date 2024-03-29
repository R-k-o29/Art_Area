function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// -----------------------------------------------------------------------
// JavaScript function to add items to the cart
function addToCart(productName, price) {
  var cart = document.getElementById("cart-items");
  var item = document.createElement("li");
  item.className = "cart-item";
  item.innerHTML = `
        <span>${productName}</span>
        <span>Rs.${price}</span>
    `;
  cart.appendChild(item);

  //   -------------------------------------
  var total = 0;
  var cartItems = document.getElementsByClassName("cart-item");
  for (var i = 0; i < cartItems.length; i++) {
    var itemPrice = parseInt(
      cartItems[i].getElementsByTagName("span")[1].innerText.replace("Rs.", "")
    );
    total += itemPrice;
  }

  // Display total amount in the cart
  var totalElement = document.getElementById("cart-total");
  if (totalElement) {
    totalElement.innerText = "Total: Rs." + total;
  } else {
    var totalContainer = document.createElement("div");
    totalContainer.id = "cart-total";
    totalContainer.innerText = "Total: Rs." + total;
    cart.appendChild(totalContainer);
  }
}

// JavaScript function to show/hide the cart
function toggleCart() {
  var cart = document.querySelector(".shopping-cart");
  if (cart.style.display === "block") {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
  }
}
