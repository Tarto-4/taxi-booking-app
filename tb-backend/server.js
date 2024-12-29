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
        defaultSrc: ["'none'"], // Enforce stricter defaults
        imgSrc: ["'self'", "data:", "https://example.com"], // Add allowed image sources
        scriptSrc: ["'self'", "'sha256-<hash-of-your-script>"], // Allow hashed inline scripts
        styleSrc: ["'self'", "'sha256-<hash-of-your-style>"], // Allow hashed inline styles
        // ... other directives as needed
      },
    },
  })
);

// Redirect HTTP to HTTPS (if applicable)
app.use((req, res, next) => {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect(`https://${req.get('host')}${req.url}`);
  }
  next();
});

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
