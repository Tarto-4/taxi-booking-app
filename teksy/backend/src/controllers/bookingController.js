const bookings = []; // Temporary in-memory storage for bookings

// Create a new booking
const createBooking = (req, res) => {
  const { userId, destination, date } = req.body;
  if (!userId || !destination || !date) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newBooking = { id: bookings.length + 1, userId, destination, date };
  bookings.push(newBooking);
  res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
};

// Get all bookings
const getBookings = (req, res) => {
  res.status(200).json(bookings);
};

module.exports = { createBooking, getBookings };
