function splitFareAmongRiders(totalFare, riders) {
  if (
    typeof totalFare !== "number" ||
    totalFare <= 0 ||
    !Array.isArray(riders) ||
    riders.length === 0
  ) {
    console.log(
      "Invalid input. Please provide a valid fare and list of riders."
    );
    return;
  }

  let totalDistance = 0;
  for (let rider of riders) {
    totalDistance += rider.distance;
  }

  console.log(`Total Fare: ₱${totalFare}`);
  console.log(`Total Distance: ${totalDistance} km`);
  console.log("Fare Split:");

  for (let rider of riders) {
    let share = (rider.distance / totalDistance) * totalFare;
    console.log(`${rider.name}: ₱${share.toFixed(2)} (${rider.distance} km)`);
  }
}
