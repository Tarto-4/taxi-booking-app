exports.createBooking = (req, res) => {
  const { userId } = req.user; // Assuming `authMiddleware` attaches `user` to `req`
  const { destination, date } = req.body;

  // Add your logic to create a booking in the database here
  res.status(201).json({
    message: 'Booking created successfully',
    booking: {
      userId,
      destination,
      date,
    },
  });
};

exports.getBookings = (req, res) => {
  const { userId } = req.user; // Assuming `authMiddleware` attaches `user` to `req`

  // Add your logic to fetch bookings from the database here
  res.status(200).json({
    message: 'Bookings fetched successfully',
    bookings: [
      // Example data
      { id: 1, destination: 'Johannesburg', date: '2025-01-10' },
      { id: 2, destination: 'Cape Town', date: '2025-01-15' },
    ],
  });
};
