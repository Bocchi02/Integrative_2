function checkoutWithLoyalty(totalPurchase, currentPoints) {
  if (totalPurchase <= 0) {
    console.log("Invalid purchase amount.");
    return;
  }

  let earnedPoints = Math.floor(totalPurchase / 100);
  let totalPoints = currentPoints + earnedPoints;

  let discount = 0;
  if (totalPoints >= 10) {
    let redeemableSets = Math.floor(totalPoints / 10);
    discount = redeemableSets * 50;
    totalPoints -= redeemableSets * 10;
  }

  let finalBill = totalPurchase - discount;
  if (finalBill < 0) finalBill = 0;

  console.log(`Total Purchase: ₱${totalPurchase}`);
  console.log(`Points Earned: ${earnedPoints}`);
  console.log(`Discount Applied: ₱${discount}`);
  console.log(`Final Bill: ₱${finalBill}`);
  console.log(`Remaining Points: ${totalPoints}`);

  return {
    finalBill: finalBill,
    remainingPoints: totalPoints,
  };
}
