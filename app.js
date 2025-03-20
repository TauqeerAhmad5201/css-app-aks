const express = require('express');
const path = require('path');
const helmet = require('helmet'); // Add this dependency

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'", "'unsafe-inline'"]
    }
  }
})); // Basic security headers

// Serve static files
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1d' // Add cache control
}));

// Health check for Kubernetes
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
