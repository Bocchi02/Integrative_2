let balance = 0;
let transactionHistory = [];

function getTimestamp() {
  return new Date().toLocaleString();
}

function receive(amount) {
  if (amount <= 0) {
    console.log("Invalid receive amount.");
    return;
  }
  balance += amount;
  transactionHistory.push({
    type: "receive",
    amount: amount,
    timestamp: getTimestamp(),
  });
  console.log(`Received ₱${amount}. Current Balance: ₱${balance}`);
}

function pay(amount) {
  if (amount <= 0) {
    console.log("Invalid payment amount.");
    return;
  }
  if (amount > balance) {
    console.log(
      `Payment of ₱${amount} denied. Insufficient balance (₱${balance})`
    );
    return;
  }
  balance -= amount;
  transactionHistory.push({
    type: "pay",
    amount: amount,
    timestamp: getTimestamp(),
  });
  console.log(`Paid ₱${amount}. Current Balance: ₱${balance}`);
}

function showBalance() {
  console.log("Current Balance: ₱" + balance);
}

function showHistory() {
  console.log("Transaction History:");
  let sorted = [...transactionHistory].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
  for (let t of sorted) {
    console.log(`[${t.timestamp}] ${t.type.toUpperCase()} ₱${t.amount}`);
  }
}
