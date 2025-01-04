const express = require('express');
const router = express.Router();

// Importing controller functions
const { login, register } = require('../controllers/authController');

// Routes
/**
 * @route POST /auth/register
 * @desc Register a new user
 * @access Public
 */
router.post('/register', register);

/**
 * @route POST /auth/login
 * @desc Log in a user
 * @access Public
 */
router.post('/login', login);

module.exports = router;
