// backend/controllers/bookingController.js
const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { userId, taxiId, seatNumber } = req.body;
    const newBooking = await Booking.create({ user: userId, taxi: taxiId, seatNumber });
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user taxi');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};
