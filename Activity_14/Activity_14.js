function computeParkingFee(vehicleType, durationHours, isVIP) {
  if (durationHours <= 0) {
    console.log("Invalid duration.");
    return;
  }

  let baseFee = 50;
  let extraHours = Math.max(0, durationHours - 1);
  let extraFee = extraHours * 20;
  let totalFee = baseFee + extraFee;

  if (isVIP) {
    totalFee *= 0.7;
  }

  totalFee = Math.round(totalFee);
  console.log(`Vehicle: ${vehicleType}`);
  console.log(`Duration: ${durationHours} hour(s)`);
  console.log(`VIP: ${isVIP ? "Yes" : "No"}`);
  console.log(`Total Parking Fee: ₱${totalFee}`);

  return totalFee;
}
