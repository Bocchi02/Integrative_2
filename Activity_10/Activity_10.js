let transactions = [];
let inventory = {};

function addTransaction(item, type, qty) {
  if (!item || !["in", "out"].includes(type) || qty <= 0) {
    console.log("Invalid transaction.");
    return;
  }

  let currentStock = inventory[item] || 0;
  let newStock = type === "in" ? currentStock + qty : currentStock - qty;

  if (newStock < 0) {
    console.log(`Cannot out ${qty} units of ${item}. Not enough stock.`);
    return;
  }

  inventory[item] = newStock;
  transactions.push({ item, type, qty });

  console.log(`Transaction successful: ${type} ${qty} of ${item}`);
}

function getCurrentInventory() {
  console.log("Current Inventory:");
  for (let item in inventory) {
    console.log(`${item}: ${inventory[item]} units`);
  }
}

function getItemStock(item) {
  return inventory[item] || 0;
}

function getTransactionHistory(item = null) {
  const filtered = item
    ? transactions.filter((t) => t.item === item)
    : transactions;

  console.log("Transaction History:");
  filtered.forEach((t) =>
    console.log(`${t.type.toUpperCase()} - ${t.qty} of ${t.item}`)
  );
}
