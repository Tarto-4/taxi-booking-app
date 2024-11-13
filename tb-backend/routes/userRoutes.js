import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
	const { username, password, email } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = new User({ username, password: hashedPassword, email });

	try {
		await user.save();
		res.status(201).send('User registered succesfully');
	} catch (err) {
		res.status(400).send(err.message);
	}
});

// User login
router.post('/login', async (req, res) => {
	const { username, password, } = req.body;
	const user = await User.findOne({ username });

	if (!user || !(await bcrypt.compare(password, user.password))) {
	return res.status(401).send('Invalid credentials');
	}
	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
	res.json({ token });
});

export default router;
