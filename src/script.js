// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.dataset.product;
            const productPrice = parseFloat(button.dataset.price);

            // Додаємо продукт до кошика
            const product = { name: productName, price: productPrice };
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${productName} додано до кошика`);
        });
    });
});
