function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// -----------------------------------------------------------------------
// JavaScript function to add items to the cart
function addToCart(productName, price) {
    var cart = document.getElementById('cart-items');
    var item = document.createElement('li');
    item.className = 'cart-item';
    item.innerHTML = `
        <span>${productName}</span>
        <span>Rs.${price}</span>
    `;
    cart.appendChild(item);
}

// JavaScript function to show/hide the cart
function toggleCart() {
    var cart = document.querySelector('.shopping-cart');
    if (cart.style.display === 'block') {
        cart.style.display = 'none';
    } else {
        cart.style.display = 'block';
    }
}
