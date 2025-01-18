const express = require('express');
const { bookRide } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Protected booking endpoint
router.post('/book', authMiddleware, bookRide);

module.exports = router;
