// backend/sockets/seatAvailability.js
module.exports = (io) => {
    io.on('seatAvailability', (data) => {
      io.emit('seatStatusUpdate', data); // Real-time update for all connected clients
    });
  };
  