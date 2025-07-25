let passengers = [];

function calculateFare(age, fare) {
  if (age >= 0 && age <= 5) {
    return 0;
  } else if (age >= 6 && age <= 21) {
    return fare * 0.8;
  } else if (age >= 60) {
    return fare * 0.5;
  } else {
    return fare;
  }
}

function computeFares(passengers) {
  let totalFare = 0;

  for (let i = 0; i < passengers.length; i++) {
    let person = passengers[i];
    let fare = calculateFare(person.age, person.fare);
    totalFare += fare;

    console.log(
      person.name + " (Age " + person.age + ") - Fare: ₱" + fare.toFixed(2)
    );
  }

  console.log("Total Fare Collected: ₱" + totalFare.toFixed(2));
}
