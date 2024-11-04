// cart.js
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Перевіряємо, чи кошик порожній
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Ваш кошик порожній.</p>';
        totalPriceElement.textContent = '0 грн';
    } else {
        // Додаємо товари в кошик
        let totalPrice = 0;
        let totalQuantity = 1;
        cart.forEach(item => {
            const itemElement = document.createElement('tr');
            itemElement.classList.add('cart-item');

            const itemName = document.createElement('td');
            itemName.classList.add('cart-item');
            itemName.innerText = `${item.name}`;

            const itemPrice = document.createElement("td");
            itemPrice.classList.add('cart-item-cell');
            itemPrice.innerText = `${item.price} грн`;

            const itemQuantity = document.createElement("td");
            itemQuantity.classList.add('cart-item-quantity');
            itemQuantity.innerText = `${totalQuantity} шт`;           
            
            const itemTotalPrice = document.createElement("td");
            itemTotalPrice.classList.add('cart-item-quantity');
            itemTotalPrice.innerText = `${totalQuantity*item.price} шт`; 

            cartContainer.append(itemElement);
            itemElement.append(itemName);
            itemElement.append(itemQuantity);
            itemElement.append(itemPrice);
            itemElement.append(itemTotalPrice);
            

            totalPrice += item.price;
        });

        // Відображаємо загальну ціну
        totalPriceElement.textContent = `${totalPrice} грн`;
    }
});
