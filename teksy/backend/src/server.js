import dotenv from 'dotenv';  // ES module import for dotenv
dotenv.config(); // Load environment variables

import express from 'express';
import authRoutes from './routes/authRoutes.js';  // ES module import for routes
import cors from 'cors';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

