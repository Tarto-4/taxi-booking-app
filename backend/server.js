// backend/server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Middleware setup
app.use(cors());
app.use(express.json());

// WebSocket connection for real-time updates
io.on('connection', (socket) => {
  console.log('New WebSocket connection');
  socket.on('seatAvailability', (data) => {
    io.emit('updateAvailability', data); // Broadcast seat availability
  });
});

// API routes
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/auth', require('./routes/auth'));

// Server listener
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
