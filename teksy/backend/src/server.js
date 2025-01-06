require("dotenv").config(); // Load environment variables
import express = require('express');
import cors = require('cors');
import authRoutes = require('./routes/authRoutes');
import bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
