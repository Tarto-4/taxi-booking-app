exports.createBooking = (req, res) => {
  const { pickupLocation, dropoffLocation, rideDate } = req.body;

  if (!pickupLocation || !dropoffLocation || !rideDate) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const booking = {
    id: Date.now(),
    pickupLocation,
    dropoffLocation,
    rideDate,
    userId: req.user.id, // Assuming `authMiddleware` adds `user` to req
  };

  res.status(201).json({ message: "Booking created successfully.", booking });
};
