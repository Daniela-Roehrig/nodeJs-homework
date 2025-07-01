"use strict";
function calculateTotal(price, quantity, discount = 0) {
    const total = price * quantity;
    return total - total * discount;
}
const total = calculateTotal(10, 2, 0.3);
console.log("Total:", total);
let id;
function displayId(id) {
    if (typeof id === "string") {
        console.log(`ID: ${id.toUpperCase()}`);
    }
    else {
        console.log(`ID: ${id * 10}`);
    }
}
displayId("daniela");
displayId(7);
const orders = [
    { orderId: "1A", amount: 80, status: "pending" },
    { orderId: "2B", amount: 230, status: "shipped" },
    { orderId: "3C", amount: 100, status: "delivered" },
    { orderId: "4D", amount: 180, status: "pending" },
];
function filterOrdersByStatus(orders, status) {
    return orders.filter((order) => order.status === status);
}
const pendingOrders = filterOrdersByStatus(orders, "pending");
const shippedOrders = filterOrdersByStatus(orders, "shipped");
const deliveredOrders = filterOrdersByStatus(orders, "delivered");
console.log(pendingOrders);
console.log(shippedOrders);
console.log(deliveredOrders);
function updateStock(inventory, productInfo) {
    const [name, price, quantity] = productInfo;
    inventory[name] = (inventory[name] || 0) + quantity;
    return inventory;
}
const inventory = {
    Apple: 12,
    Banana: 13,
    Lemon: 8,
};
const product = ["Apple", 1.99, 10];
const product2 = ["Banana", 2.49, 5];
const product3 = ["Lemon", 1.19, 3];
updateStock(inventory, product);
updateStock(inventory, product2);
updateStock(inventory, product3);
console.log(inventory);
