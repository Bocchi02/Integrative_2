let rides = [];

function getTotalEarnings(rides) {
  let total = 0;
  for (let i = 0; i < rides.length; i++) {
    total += rides[i].fare;
  }
  return "Total Earnings: P" + total;
}

function getLongestRide(rides) {
  let longest = rides[0];
  for (let i = 1; i < rides.length; i++) {
    if (rides[i].distance > longest.distance) {
      longest = rides[i];
    }
  }
  return (
    "Longest Ride: " +
    longest.distance +
    " km, Fare: P" +
    longest.fare +
    ", Time: " +
    longest.time
  );
}

function getPeakHour(rides) {
  let hourMap = {};

  for (let i = 0; i < rides.length; i++) {
    let hour = rides[i].time.split(":")[0]; // get hour
    hourMap[hour] = (hourMap[hour] || 0) + 1;
  }

  let peakHour = null;
  let maxRides = 0;

  for (let hour in hourMap) {
    if (hourMap[hour] > maxRides) {
      maxRides = hourMap[hour];
      peakHour = hour;
    }
  }

  return "Peak Hour: " + peakHour + ":00" + " with " + maxRides + " rides";
}
