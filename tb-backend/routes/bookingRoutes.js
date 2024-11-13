import express from 'express';
import Booking from '../models/Booking.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware
const authenticate = (req, res, next) => {
	const token = req.header['authorization'];

	if (!token) {
		return res.status(401).send('Aces denied');
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(403).send('Invalid token');
		}
		req.userId = decoded.id;
		next();
	});
};

// Create booking
router.post('/', authenticate, async (req, res) => {
	const { taxiId, dte, time, seats } = req.body;
	const booking = new Booking({ userId: req.userId, taxiId, dtae, time, seats });

	try {
		await booking.save();
		res.status(201).send('Booking created successfully');
	} catch (err) {
		res.status(400).send(err.message);
	}
});

// Get User bookings
router.get('/', authenticate, async (req, res) => {
	try {
		const bookings = await Booking.find({ userId: req.userId });
		res.json(bookings);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

export default router;
