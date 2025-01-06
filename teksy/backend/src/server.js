require("dotenv").config(); // Load environment variables
const express = require('express');
const authRoutes = require('./routes/authRoutes.js');
import cors from 'cors';
const bookingRoutes = require('./routes/bookingRoutes.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

