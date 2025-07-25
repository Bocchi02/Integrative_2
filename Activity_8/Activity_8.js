function calculateFinalOrder(items) {
  if (!Array.isArray(items) || items.length === 0) {
    console.log("Invalid input. Provide a list of items with name and price.");
    return;
  }

  let totalPrice = 0;
  for (let item of items) {
    totalPrice += item.price;
  }

  const itemCount = items.length;
  let discount = 0;
  let discountName = "No discount";

  const percent10 = totalPrice > 1000 ? totalPrice * 0.1 : 0;
  const percent20 = totalPrice >= 5000 ? totalPrice * 0.2 : 0;
  const flat100 = itemCount >= 5 ? 100 : 0;

  discount = Math.max(percent10, percent20, flat100);

  if (discount === percent20) {
    discountName = "20% Discount (₱5000+)";
  } else if (discount === percent10) {
    discountName = "10% Discount (₱1000+)";
  } else if (discount === flat100) {
    discountName = "Flat ₱100 Discount (5+ items)";
  }

  const finalTotal = totalPrice - discount;

  console.log(`Original Total: ₱${totalPrice.toFixed(2)}`);
  console.log(`Discount Applied: ${discountName}`);
  console.log(`Final Total: ₱${finalTotal.toFixed(2)}`);

  return {
    total: totalPrice,
    discountName: discountName,
    discountAmount: discount,
    finalTotal: finalTotal,
  };
}
