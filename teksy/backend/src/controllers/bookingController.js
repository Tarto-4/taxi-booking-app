// backend/src/controllers/bookingController.js
const createBooking = (req, res) => {
  // Example: Handle booking creation
  const { userId, destination, pickupLocation } = req.body;

  if (!userId || !destination || !pickupLocation) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Mocked database save logic
  const newBooking = { id: Date.now(), userId, destination, pickupLocation };
  return res.status(201).json({ message: 'Booking created successfully!', booking: newBooking });
};

const getBookings = (req, res) => {
  // Example: Return all bookings (mocked data)
  const bookings = [
    { id: 1, userId: 123, destination: 'Johannesburg', pickupLocation: 'Pretoria' },
    { id: 2, userId: 456, destination: 'Cape Town', pickupLocation: 'Durban' },
  ];

  return res.status(200).json(bookings);
};

module.exports = { createBooking, getBookings };
