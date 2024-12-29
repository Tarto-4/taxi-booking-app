const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = 5000;

// Use Helmet for security headers, including CSP
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "http://localhost:5000"], // Allow images from localhost
        scriptSrc: ["'self'"], // Allow scripts from the same origin
        styleSrc: ["'self'"], // Allow styles from the same origin
      },
    },
  })
);

// Serve static files (including favicon)
app.use(express.static(path.join(__dirname, 'public')));

// Define a basic route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
