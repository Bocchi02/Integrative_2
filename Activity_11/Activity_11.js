let bookings = [];

function isOverlap(start1, end1, start2, end2) {
  return start1 <= end2 && start2 <= end1;
}

function addBooking(roomNumber, startDate, endDate) {
  if (new Date(startDate) >= new Date(endDate)) {
    console.log("Invalid dates: End date must be after start date.");
    return;
  }

  const overlap = bookings.some(
    (b) =>
      b.roomNumber === roomNumber &&
      isOverlap(
        new Date(b.startDate),
        new Date(b.endDate),
        new Date(startDate),
        new Date(endDate)
      )
  );

  if (overlap) {
    console.log(
      `Booking conflict: Room ${roomNumber} is already booked during this period.`
    );
    return;
  }

  bookings.push({ roomNumber, startDate, endDate });
  console.log(
    `Booking confirmed: Room ${roomNumber} from ${startDate} to ${endDate}`
  );
}

function showBookings() {
  console.log("Current Bookings:");
  bookings.forEach((b) =>
    console.log(`Room ${b.roomNumber}: ${b.startDate} to ${b.endDate}`)
  );
}
