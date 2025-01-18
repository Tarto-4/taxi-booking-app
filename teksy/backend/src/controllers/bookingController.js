exports.bookRide = async (req, res) => {
  try {
    const { pickup, destination, time } = req.body;

    if (!pickup || !destination || !time) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Simulate booking logic (replace with actual database logic)
    const booking = {
      userId: req.user.id, // Retrieved from authMiddleware
      pickup,
      destination,
      time,
      status: 'Pending',
    };

    // Respond with success
    res.status(201).json({ message: 'Ride booked successfully', booking });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
