import express from 'express';
import { auth } from '../middleware/auth.js';
import { checkRole } from '../middleware/checkRole.js';
import { Driver } from '../models/Driver.js';
import { Booking } from '../models/Booking.js';
import { validateDriverUpdate } from '../middleware/validation.js';

const router = express.Router();

// Get available bookings for drivers
router.get('/available-bookings', auth, checkRole('driver'), async (req, res) => {
  try {
    const bookings = await Booking.find({
      status: 'pending',
      driver: null,
    }).populate('user', 'name phone');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
});

// Accept a booking
router.post('/accept-booking/:bookingId', auth, checkRole('driver'), async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId);
    if (!booking || booking.status !== 'pending') {
      return res.status(400).json({ message: 'Booking not available' });
    }

    booking.driver = req.userId;
    booking.status = 'accepted';
    await booking.save();

    // Notify user through WebSocket
    global.io.to(`user_${booking.user}`).emit('booking_accepted', {
      bookingId: booking._id,
      driverDetails: await Driver.findOne({ user: req.userId })
    });

    res.json({ message: 'Booking accepted successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error accepting booking', error: error.message });
  }
});

// Update driver location
router.post('/update-location', auth, checkRole('driver'), async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const driver = await Driver.findOneAndUpdate(
      { user: req.userId },
      { 
        currentLocation: {
          type: 'Point',
          coordinates: [longitude, latitude]
        },
        lastLocationUpdate: new Date()
      },
      { new: true }
    );

    // Notify active passenger if exists
    const activeBooking = await Booking.findOne({
      driver: req.userId,
      status: { $in: ['accepted', 'in-progress'] }
    });

    if (activeBooking) {
      global.io.to(`user_${activeBooking.user}`).emit('driver_location', {
        bookingId: activeBooking._id,
        location: { latitude, longitude }
      });
    }

    res.json({ message: 'Location updated successfully', driver });
  } catch (error) {
    res.status(500).json({ message: 'Error updating location', error: error.message });
  }
});

// Start trip
router.post('/start-trip/:bookingId', auth, checkRole('driver'), async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId);
    if (!booking || booking.status !== 'accepted') {
      return res.status(400).json({ message: 'Invalid booking status' });
    }

    booking.status = 'in-progress';
    booking.startTime = new Date();
    await booking.save();

    global.io.to(`user_${booking.user}`).emit('trip_started', { bookingId: booking._id });

    res.json({ message: 'Trip started successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error starting trip', error: error.message });
  }
});

// Complete trip
router.post('/complete-trip/:bookingId', auth, checkRole('driver'), async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId);
    if (!booking || booking.status !== 'in-progress') {
      return res.status(400).json({ message: 'Invalid booking status' });
    }

    booking.status = 'completed';
    booking.endTime = new Date();
    await booking.save();

    global.io.to(`user_${booking.user}`).emit('trip_completed', { 
      bookingId: booking._id,
      fare: booking.fare
    });

    res.json({ message: 'Trip completed successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error completing trip', error: error.message });
  }
});

export default router;
