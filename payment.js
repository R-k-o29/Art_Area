function checkout() {
  var cartItems = document.getElementsByClassName("cart-item");
  if (cartItems.length === 0) {
    alert("Your cart is empty. Please add some items before checkout.");
    return;
  }

  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    var itemPrice = parseInt(
      cartItems[i].getElementsByTagName("span")[1].innerText.replace("Rs.", "")
    );
    total += itemPrice;
  }
}
  // Open the payment modal
  function openPayment() {
    var modal = document.getElementById("paymentModal");
    modal.style.display = "block";
  }

  // Close the payment modal
  function closePayment() {
    var modal = document.getElementById("paymentModal");
    modal.style.display = "none";
  }

  // Simulate payment process
  document.getElementById("paymentForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      alert("Payment successful!"); // Dummy success message
      closePayment(); // Close the payment modal
      window.location.href = "index.html";
    });

