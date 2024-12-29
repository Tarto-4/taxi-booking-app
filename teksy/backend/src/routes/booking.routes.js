// src/routes/bookingRoutes.js
import express from 'express';
import { auth } from '../middleware/auth.js';
import { Booking } from '../models/Booking.js';
import { validateBooking } from '../middleware/validation.js';

const router = express.Router();

router.post('/', auth, validateBooking, async (req, res) => {
  try {
    const { pickupLocation, dropoffLocation, pickupTime, passengers } = req.body;
    
    const booking = new Booking({
      user: req.userId,
      pickupLocation,
      dropoffLocation,
      pickupTime,
      passengers,
      status: 'pending'
    });

    await booking.save();
    
    // Here you would typically implement driver matching logic
    
    res.status(201).json({
      message: 'Booking created successfully',
      booking
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
});

router.get('/user', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId })
      .sort({ createdAt: -1 })
      .populate('driver', 'name vehicle rating');
      
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
});

export default router;
