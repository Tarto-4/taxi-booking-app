// backend/src/middleware/authMiddleware.js
const authMiddleware = (req, res, next) => {
  // Mocked authentication logic
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== 'Bearer mock-token') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next(); // Proceed to the next middleware or route handler
};

module.exports = authMiddleware;
