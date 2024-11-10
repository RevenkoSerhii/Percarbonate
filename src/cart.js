document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Ваш кошик порожній.</p>';
        totalPriceElement.textContent = `0 грн`;
    } else {
        let totalPrice = 0;

        const TableHeader = document.createElement("thead");
        TableHeader.classList.add('cart-thead');
        cartContainer.append(TableHeader);

        const TableHeaderRow = document.createElement("tr");
        TableHeaderRow.classList.add('cart-thead-row');
        TableHeader.append(TableHeaderRow);

        const headers = ['Назва продукту', '', 'Кількість, шт', '', 'Ціна за шт', 'Всього, грн', 'Видалити'];
        headers.forEach(header => {
            const th = document.createElement("th");
            th.classList.add('cart-item-header');
            th.innerText = header;
            TableHeaderRow.append(th);
        });

        cart.forEach((item, index) => {
            item.quantity = item.quantity || 1; // Встановлюємо початкову кількість 1, якщо її немає

            const itemElement = document.createElement('tr');
            itemElement.classList.add('cart-item');

            const itemName = document.createElement('td');
            itemName.innerText = item.name;

            const itemPrice = document.createElement("td");
            itemPrice.innerText = `${item.price} грн`;

            const itemQuantity = document.createElement("td");
            itemQuantity.innerText = item.quantity;

            const itemTotalPrice = document.createElement("td");
            itemTotalPrice.innerText = `${item.quantity * item.price} грн`;

            const quantityIncreaseButton = document.createElement("button");
            quantityIncreaseButton.classList.add('IncreaseButton');
            quantityIncreaseButton.innerText = "+";

            const quantityDecreaseButton = document.createElement("button");
            quantityDecreaseButton.classList.add('DecreaseButton');
            quantityDecreaseButton.innerText = "-";

            const removeButton = document.createElement("button");
            removeButton.classList.add('RemoteButton');
            removeButton.innerText = "Х";

            itemElement.append(itemName, quantityDecreaseButton, itemQuantity, quantityIncreaseButton, itemPrice, itemTotalPrice, removeButton);
            cartContainer.append(itemElement);

            // Функція для оновлення загальної суми
            function updateTotalPrice() {
                totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
                totalPriceElement.innerText = `${totalPrice} грн`;
            }

            // Оновлюємо загальну ціну для початкової кількості
            updateTotalPrice();

            // Обробник для кнопки збільшення кількості
            quantityIncreaseButton.addEventListener("click", () => {
                item.quantity += 1;
                itemQuantity.innerText = item.quantity;
                itemTotalPrice.innerText = `${item.quantity * item.price} грн`;
                updateTotalPrice();
            });

            // Обробник для кнопки зменшення кількості
            quantityDecreaseButton.addEventListener("click", () => {
                if (item.quantity > 1) { // Зменшуємо тільки якщо кількість більше 1
                    item.quantity -= 1;
                    itemQuantity.innerText = item.quantity;
                    itemTotalPrice.innerText = `${item.quantity * item.price} грн`;
                    updateTotalPrice();
                }
            });

            removeButton.addEventListener("click", () => {
                cart.splice(index, 1);  // Видаляємо елемент за індексом
                localStorage.setItem('cart', JSON.stringify(cart));  // Оновлюємо LocalStorage
                itemElement.remove();  // Видаляємо HTML елемент товару
                updateTotalPrice();  // Оновлюємо загальну суму
            
                // Перевіряємо, чи кошик порожній після видалення товару
                if (cart.length === 0) {
                    cartContainer.innerHTML = '<p>Ваш кошик порожній.</p>';
                    totalPriceElement.textContent = `0 грн`;
                }
            });
            
        });
    }
});
