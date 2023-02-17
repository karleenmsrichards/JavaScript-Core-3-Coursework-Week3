/* 
- In `exercise-3.js`, you have been provided with a takeout order. Write a program that will print out the receipt for this order.
- Log each individual item to the console.
- Log the total cost of the order to the console.

## Expected result

```
QTY     ITEM                TOTAL
1       Hot Cakes           2.29
2       Apple Pie           2.78
1       Egg McMuffin        2.80
1       Sausage McMuffin    3.00
2       Hot Coffee          2.00
4       Hash Brown          1.60

Total: 14.47
```


*/

let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(bought) {
  let total = 0;
  bought.forEach((item) => {
    const itemSection = document.createElement("div");
    itemSection.classList.add("item-section");
    receipt.appendChild(itemSection);
    const quantityElem = document.createElement("p");
    quantityElem.classList.add("quantity-elem");
    const itemElem = document.createElement("p");
    itemElem.classList.add("item-elem");
    const totalElem = document.createElement("p");
    totalElem.classList.add("total-elem");
    itemSection.appendChild(quantityElem);
    itemSection.appendChild(itemElem);
    itemSection.appendChild(totalElem);
    let { itemName, quantity, unitPrice } = item;
    let subTotal = unitPrice * quantity;
    total += subTotal;

    quantityElem.innerText = quantity;
    itemElem.innerText = itemName;
    totalElem.innerText = unitPrice;

    console.log(`${quantity}    ${itemName}      ${unitPrice}`);
  });

  let totalSection = document.createElement("div");
  totalSection.classList.add("total-section");

  let totalText = document.createElement("p");
  totalText.classList.add("total-text");

  let totalToPay = document.createElement("p");
  totalToPay.classList.add("total-amt");

  totalText.innerText = `Sub Total`;
  totalToPay.innerText = `£${total}`;
  totalSection.appendChild(totalText);
  totalSection.appendChild(totalToPay);
  receipt.appendChild(totalSection);
}

printReceipt(order);
