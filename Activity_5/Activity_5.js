// Initial Inventory
let inventory = [
  { name: "Laptop", stock: 10, price: 45000 },
  { name: "Mouse", stock: 7, price: 400 },
  { name: "Keyboard", stock: 3, price: 1200 },
  { name: "Headset", stock: 15, price: 1800 },
];

function findItem(itemName) {
  return inventory.find(
    (item) => item.name.toLowerCase() === itemName.toLowerCase()
  );
}

function addItem(name, stock, price) {
  if (stock <= 0 || price <= 0) {
    console.log("Stock and price must be greater than 0.");
    return;
  }

  let item = findItem(name);

  if (item) {
    item.stock += stock;
    console.log(`Updated "${item.name}" stock. New stock: ${item.stock}`);
  } else {
    inventory.push({ name: name, stock: stock, price: price });
    console.log(`Added new item: ${name} (₱${price}) with stock: ${stock}`);
  }
}

function purchase(itemName, quantity) {
  let item = findItem(itemName);

  if (!item) {
    console.log("Item not found: " + itemName);
    return;
  }

  if (quantity <= 0) {
    console.log("Invalid quantity.");
    return;
  }

  if (item.stock < quantity) {
    console.log(
      `Purchase failed. Only ${item.stock} ${item.name}(s) in stock.`
    );
    return;
  }

  item.stock -= quantity;
  let totalCost = item.price * quantity;

  console.log(
    `Purchased ${quantity} ${item.name}(s) for ₱${totalCost}. Remaining stock: ${item.stock}`
  );

  if (item.stock < 5) {
    console.warn(`Warning: ${item.name} stock is low (${item.stock} left).`);
  }
}
