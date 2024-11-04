// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Підключіть EmailJS SDK
// (function() {
//     emailjs.init("YOUR_PUBLIC_KEY");
//   })();
  
  // document.getElementById("order-form").addEventListener("submit", function(event) {
  //     event.preventDefault();
  
  //     const formData = {
  //         name: document.getElementById("name").value,
  //         phone: document.getElementById("phone").value,
  //         address: document.getElementById("address").value,
  //         product: document.getElementById("product").value,
  //         quantity: document.getElementById("quantity").value,
  //         message: document.getElementById("message").value
  //     };
  
  //     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
  //       .then(function(response) {
  //         alert("Замовлення надіслано успішно!");
  //       }, function(error) {
  //         alert("Помилка при відправці замовлення.");
  //       });
  // });
  

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.dataset.product;
            const productPrice = parseFloat(button.dataset.price);

            // Додаємо продукт до кошика
            const product = { name: productName, price: productPrice };
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${productName} додано до кошика`);
            console.log(cart)
        });
    });
});


function toggleContent(button) {
  const container = button.parentElement;
  if (container.classList.contains("expanded")) {
      container.classList.remove("expanded");
      button.textContent = "Показати більше";
  } else {
      container.classList.add("expanded");
      button.textContent = "Приховати";
  }
}


