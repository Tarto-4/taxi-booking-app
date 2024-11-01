// backend/models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  taxi: { type: mongoose.Schema.Types.ObjectId, ref: 'Taxi', required: true },
  seatNumber: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'booked' }
});

module.exports = mongoose.model('Booking', BookingSchema);
