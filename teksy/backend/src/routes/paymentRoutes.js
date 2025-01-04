// src/routes/paymentRoutes.js
import express from 'express';
import { auth } from '../middleware/auth.js';
import { Booking } from '../models/Booking.js';
import { Payment } from '../models/Payment.js';
import Stripe from 'stripe';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create payment intent
router.post('/create-payment-intent', auth, async (req, res) => {
  try {
    const { bookingId } = req.body;
    const booking = await Booking.findById(bookingId);
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(booking.fare.amount * 100), // Convert to cents
      currency: booking.fare.currency.toLowerCase(),
      metadata: {
        bookingId: booking._id.toString(),
        userId: req.userId.toString()
      }
    });

    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment', error: error.message });
  }
});

// Handle successful payment
router.post('/payment-success', auth, async (req, res) => {
  try {
    const { bookingId, paymentIntentId } = req.body;
    
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const payment = new Payment({
      booking: bookingId,
      user: req.userId,
      amount: booking.fare.amount,
      currency: booking.fare.currency,
      stripePaymentIntentId: paymentIntentId,
      status: 'completed'
    });

    await payment.save();
    
    booking.paymentStatus = 'completed';
    await booking.save();

    res.json({ message: 'Payment processed successfully', payment });
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment', error: error.message });
  }
});

export default router;
