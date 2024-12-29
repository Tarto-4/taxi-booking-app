import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules don't have __dirname by default, so we need to create it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Use Helmet for security headers, including CSP
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'none'"],
        imgSrc: ["'self'", "data:", "https://example.com"],
        scriptSrc: ["'self'", "'sha256-<hash-of-your-script>'"],
        styleSrc: ["'self'", "'sha256-<hash-of-your-style>'"],
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
