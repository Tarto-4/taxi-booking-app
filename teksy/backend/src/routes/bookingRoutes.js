const express = require('express');
const { createBooking, getBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Debugging logs
console.log('createBooking:', typeof createBooking); // Should print "function"
console.log('getBookings:', typeof getBookings); // Should print "function"
console.log('authMiddleware:', typeof authMiddleware); // Should print "function"

// Define routes
router.post('/', authMiddleware, createBooking);
router.get('/', authMiddleware, getBookings);

module.exports = router;
