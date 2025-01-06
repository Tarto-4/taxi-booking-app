require("dotenv").config(); // Load environment variables
const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const authenticateToken = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

// Protected route example
app.get("/api/protected", authenticateToken, (req, res) => {
  res.status(200).json({ message: "Welcome to the protected route!", user: req.user });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
