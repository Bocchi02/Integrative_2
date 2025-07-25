function calculateElectricBill(kWhUsed) {
  if (typeof kWhUsed !== "number" || kWhUsed < 0) {
    console.log("Invalid input. Please enter a valid number of kWh used.");
    return;
  }

  let amount = 0;

  if (kWhUsed <= 100) {
    amount = kWhUsed * 5;
  } else if (kWhUsed <= 300) {
    amount = 100 * 5 + (kWhUsed - 100) * 8;
  } else {
    amount = 100 * 5 + 200 * 8 + (kWhUsed - 300) * 10;
  }

  console.log(`Total kWh used: ${kWhUsed}`);
  console.log(`Electric Bill: ₱${amount.toFixed(2)}`);

  return amount;
}
