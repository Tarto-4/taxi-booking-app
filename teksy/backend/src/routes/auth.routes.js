// src/routes/authRoutes.js
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { validateAuth } from '../middleware/validation.js';

const router = express.Router();

router.post('/register', validateAuth, async (req, res) => {
  try {
    const { email, password, name, phone } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: hashedPassword,
      name,
      phone
    });

    await user.save();
    
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: { id: user._id, email: user.email, name: user.name }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, email: user.email, name: user.name }
    });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
});

export default router;

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
