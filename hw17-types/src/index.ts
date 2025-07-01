//------------- Nr.1 --------------//

function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  const total = price * quantity;
  return total - total * discount;
}

const total = calculateTotal(10, 2, 0.3);
console.log("Total:", total);  


//------------- Nr.2 --------------//

let id: string | number;

function displayId(id: string | number): void {
  if (typeof id === "string") {
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    console.log(`ID: ${id * 10}`);
  }
}

displayId("daniela");   
displayId(7);      
//------------- Nr.3 --------------//

type OrderStatus = "pending" | "shipped" | "delivered";

interface Order {
  orderId: string;
  amount: number;
  status: OrderStatus;
}

const orders: Order[] = [
  { orderId: "1A", amount: 80, status: "pending" },
  { orderId: "2B", amount: 230, status: "shipped" },
  { orderId: "3C", amount: 100, status: "delivered" },
  { orderId: "4D", amount: 180, status: "pending" },
];

function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
  return orders.filter((order) => order.status === status);
}

const pendingOrders = filterOrdersByStatus(orders, "pending");
const shippedOrders = filterOrdersByStatus(orders, "shipped");
const deliveredOrders = filterOrdersByStatus(orders, "delivered");

console.log(pendingOrders);
console.log(shippedOrders);
console.log(deliveredOrders);


//------------- Nr.4 --------------//

type ProductInfo = [string, number, number];

function updateStock(
  inventory: { [productName: string]: number },
  productInfo: ProductInfo
): { [productName: string]: number } {
  const [name, price, quantity] = productInfo;
  inventory[name] = (inventory[name] || 0) + quantity;
  return inventory;
}

const inventory = {
  Apple: 12,
  Banana: 13,
  Lemon: 8,
};

const product: ProductInfo = ["Apple", 1.99, 10];
const product2: ProductInfo = ["Banana", 2.49, 5];
const product3: ProductInfo = ["Lemon", 1.19, 3];

updateStock(inventory, product);
updateStock(inventory, product2);
updateStock(inventory, product3);

console.log(inventory);
