let rides = [
  { fare: 120, distance: 40, time: "12:30" },
  { fare: 150, distance: 50, time: "13:00" },
  { fare: 200, distance: 60, time: "13:30" },
  { fare: 180, distance: 55, time: "14:00" },
  { fare: 220, distance: 70, time: "14:30" },
  { fare: 170, distance: 65, time: "15:00" },
  { fare: 190, distance: 75, time: "15:30" },
  { fare: 210, distance: 80, time: "16:00" },
  { fare: 230, distance: 85, time: "16:30" },
];

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
