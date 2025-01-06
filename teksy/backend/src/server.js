require("dotenv").config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON request bodies

// Mock Database (replace with real DB connection)
let users = [];

// Register Route
app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  // Mock: Check if the user already exists
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    return res.status(409).json({ message: 'User already exists!' });
  }

  // Mock: Save user
  users.push({ name, email, password });
  return res.status(201).json({ message: 'User registered successfully!' });
});

// Server Start
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
