const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); // Correct import names
const router = express.Router();

router.post('/register', registerUser); // Match the exported function name
router.post('/login', loginUser);       // Match the exported function name

module.exports = router;
