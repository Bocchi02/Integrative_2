let loadTracker = [];

function getTodayDate() {
  const today = new Date();
  return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}

function getTotalLoadForToday(number) {
  const today = getTodayDate();
  return loadTracker
    .filter((entry) => entry.number === number && entry.date === today)
    .reduce((sum, entry) => sum + entry.amount, 0);
}

function sendLoad(number, amount) {
  const today = getTodayDate();
  const totalToday = getTotalLoadForToday(number);

  if (totalToday + amount > 500) {
    console.log(`Load denied for ${number}. Daily limit of ₱500 exceeded.`);
    return;
  }

  loadTracker.push({ number, amount, date: today });
  console.log(
    `Sent ₱${amount} load to ${number}. Total today: ₱${totalToday + amount}`
  );
}

function showLoadHistory() {
  console.log("Load History:");
  loadTracker.forEach((entry) =>
    console.log(`📱 ${entry.number} - ₱${entry.amount} on ${entry.date}`)
  );
}
