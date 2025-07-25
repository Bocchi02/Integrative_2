var dailyLimit = 10000;
var accounts = {};

function createAccount(name, initialBalance) {
  accounts[name] = {
    balance: initialBalance,
    dailyWithraw: 0,
  };
  console.log(
    `Account created for ${name} with initial balance of ${initialBalance}`
  );
}

function deposit(name, amount) {
  if (account <= 0) {
    console.log("Deposit amount must be greater than zero.");
    return;
  }
  if (!accounts[name]) {
    console.log("Account does not exist.");
    return;
  }
  accounts[name].balance += amount;
  console.log(
    `Deposited P ${amount} to ${name}'s account. New balance: P ${accounts[name].balance}`
  );
}

function withdraw(name, amount) {
  if (amount <= 0) {
    console.log("Withdrawal amount must be greater than zero.");
    return;
  }
  if (!accounts[name]) {
    console.log("Account does not exist.");
    return;
  }
  if (accounts[name].dailyWithraw + amount > dailyLimit) {
    console.log(
      `Daily withdrawal limit exceeded. You can only withdraw up to P ${
        dailyLimit - accounts[name].dailyWithraw
      } today.`
    );
    return;
  }
  if (accounts[name].balance < amount) {
    console.log("Insufficient funds for this withdrawal.");
    return;
  }

  accounts[name].balance -= amount;
  accounts[name].dailyWithraw += amount;
  console.log(
    `Withdrew P ${amount} from ${name}'s account. New balance: P ${accounts[name].balance}`
  );
}

function checkBalance(name) {
  if (!accounts[name]) {
    console.log("Account does not exist.");
    return;
  }
  console.log(
    `${name}'s current balance is P ${accounts[name].balance} with daily withdrawals of P ${accounts[name].dailyWithraw}`
  );
}

function resetDailyWithdrawals() {
  for (var account in accounts) {
    accounts[account].dailyWithraw = 0;
  }
  console.log("Daily withdrawals have been reset for all accounts.");
}
