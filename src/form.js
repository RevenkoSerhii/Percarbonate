// cart.js
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const orderMessage = document.getElementById('message');
    console.log(orderMessage.textContent  = 'test')

    // Перевіряємо, чи кошик порожній
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Ваш кошик порожній.</p>';
        totalPriceElement.textContent = '0 грн';
    } else {
        // Додаємо товари в кошик
        let totalPrice = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.classList.add('cart-item');
            itemElement.innerText = `${item.name} - ${item.price} грн`;
            cartContainer.appendChild(itemElement);
            totalPrice += item.price;
        });

        // Відображаємо загальну ціну
        totalPriceElement.textContent = `${totalPrice} грн`;
        orderMessage.textContent = totalPrice;
    }
});