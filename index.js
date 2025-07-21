let inventory = [
    {id: 1, name: 'Apple', price: 0.50, quantity: 200},
    {id: 2, name: 'Banana', price: 0.30, quantity: 150},
    {id: 3, name: 'Apple', price: 0.90, quantity: 50},
]

// const productName = inventory.map((item) => item.name);
// console.log(productName);

function updateInventory(productId, amount) {
    inventory.map((item) => {
        item.id === productId ? item.quantity += amount : '';
        item.quantity < 0 ? item.quantity = 0 : ''
    })
}

updateInventory(1, -150)
updateInventory(2, -130)
updateInventory(3, -24)

function findStock(threshold) {
    Object.entries(inventory).forEach((item) => {
        console.log(item);
    })


}

findStock(35)



