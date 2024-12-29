import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';

export const initializeWebSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true
    }
  });

  // Middleware to authenticate socket connections
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error('Authentication error'));
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.userId = decoded.userId;
      next();
    } catch (error) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.userId);

    // Join user-specific room
    socket.join(`user_${socket.userId}`);

    socket.on('track_driver', async (bookingId) => {
      socket.join(`booking_${bookingId}`);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.userId);
    });
  });

  // Make io accessible globally
  global.io = io;
  return io;
};
