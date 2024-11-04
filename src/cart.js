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

        const TableHeader = document.createElement("thead");
        TableHeader.classList.add('cart-thead');
        cartContainer.append(TableHeader);

        const TableHeaderRow = document.createElement("tr");
        TableHeaderRow.classList.add('cart-thead-row');
        TableHeader.append(TableHeaderRow);
        
        const itemElHeaderName = document.createElement("th");
        itemElHeaderName.classList.add('cart-item-header');
        itemElHeaderName.innerText = `Назва продукту`;
        TableHeaderRow.append(itemElHeaderName);

        const itemElHeaderQuantity = document.createElement("th");
        itemElHeaderQuantity.classList.add('cart-item-header');
        itemElHeaderQuantity.innerText = `Кількість`;
        TableHeaderRow.append(itemElHeaderQuantity);

        const itemElHeaderPrice = document.createElement("th");
        itemElHeaderPrice.classList.add('cart-item-header');
        itemElHeaderPrice.innerText = `Ціна за шт`;
        TableHeaderRow.append(itemElHeaderPrice);

        const itemElHeaderTotalPrice = document.createElement("th");
        itemElHeaderTotalPrice.classList.add('cart-item-header');
        itemElHeaderTotalPrice.innerText = `Всього, грн`;
        TableHeaderRow.append(itemElHeaderTotalPrice);

        cart.forEach(item => {


            const itemElement = document.createElement('tr');
            itemElement.classList.add('cart-item');

            const itemName = document.createElement('td');
            itemName.classList.add('cart-item');
            itemName.innerText = `${item.name}`;

            const itemPrice = document.createElement("td");
            itemPrice.classList.add('cart-item');
            itemPrice.innerText = `${item.price} грн`;

            const itemQuantity = document.createElement("td");
            itemQuantity.classList.add('cart-item');
            itemQuantity.innerText = `${totalQuantity} шт`;           
            
            const itemTotalPrice = document.createElement("td");
            itemTotalPrice.classList.add('cart-item');
            itemTotalPrice.innerText = `${totalQuantity*item.price} грн`; 

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
