// backend/src/middleware/authMiddleware.js
module.exports = (req, res, next) => {
  // Simulate authentication check
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // Mock user verification (replace with actual JWT logic)
  req.user = { id: 1 }; // Add user data to request
  next();
};
