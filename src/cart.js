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

        const itemElHeaderDecrease = document.createElement("th");
        itemElHeaderDecrease.classList.add('cart-item-header');
        TableHeaderRow.append(itemElHeaderDecrease);

        const itemElHeaderQuantity = document.createElement("th");
        itemElHeaderQuantity.classList.add('cart-item-header');
        itemElHeaderQuantity.innerText = `Кількість, шт`;

        TableHeaderRow.append(itemElHeaderQuantity);
        const itemElHeaderIncrease = document.createElement("th");
        itemElHeaderIncrease.classList.add('cart-item-header');
        TableHeaderRow.append(itemElHeaderIncrease);

        const itemElHeaderPrice = document.createElement("th");
        itemElHeaderPrice.classList.add('cart-item-header');
        itemElHeaderPrice.innerText = `Ціна за шт`;
        TableHeaderRow.append(itemElHeaderPrice);

        const itemElHeaderTotalPrice = document.createElement("th");
        itemElHeaderTotalPrice.classList.add('cart-item-header');
        itemElHeaderTotalPrice.innerText = `Всього, грн`;
        TableHeaderRow.append(itemElHeaderTotalPrice);

        cart.forEach(item => {
            let totalQuantity = 1;

            const itemElement = document.createElement('tr');
            itemElement.classList.add('cart-item');

            const itemName = document.createElement('td');
            itemName.classList.add('itemName');
            itemName.innerText = `${item.name}`;

            const itemPrice = document.createElement("td");
            itemPrice.classList.add('itemPrice');
            itemPrice.innerText = `${item.price} грн`;

            let itemQuantity = document.createElement("td");
            itemQuantity.classList.add('itemQuantity');
            itemQuantity.innerText = `${totalQuantity}`;           
            
            const itemTotalPrice = document.createElement("td");
            itemTotalPrice.classList.add('itemTotalPrice');
            itemTotalPrice.innerText = `${totalQuantity*item.price} грн`; 
            console.log(totalQuantity)

            let quantityIncreaseButton = document.createElement("button");
            quantityIncreaseButton.classList.add('IncreaseButton');
            quantityIncreaseButton.innerText = ("+");

            let quantityDecreaseButton = document.createElement("button");
            quantityDecreaseButton.classList.add('DecreaseButton');
            quantityDecreaseButton.innerText = ("-");


            cartContainer.append(itemElement);
            itemElement.append(itemName, quantityDecreaseButton,itemQuantity, quantityIncreaseButton, itemPrice, itemTotalPrice);

            
            itemElement.addEventListener("click", (e)=>{
                if(e.target.nodeName !== "BUTTON"){
                    return
                }
                else if(e.target.classList.contains('IncreaseButton')){
                    itemQuantity.innerText = totalQuantity+=1;
                    itemTotalPrice.innerText = `${totalQuantity*item.price} грн`; 
                    console.log(totalQuantity)
                }
                else if(e.target.classList.contains('DecreaseButton')){
                    itemQuantity.innerText = totalQuantity-=1;
                    itemTotalPrice.innerText = `${totalQuantity*item.price} грн`; 
                    console.log(totalQuantity)
                }
            })
            totalPrice += item.quantity * item.price;
            totalPriceElement.textContent = `${totalPrice} грн`;  
        });



        // Відображаємо загальну ціну
        

        


    }
 
});
