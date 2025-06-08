const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files from the "client" folder
app.use(express.static(path.join(__dirname, 'client')));

// Root route — shows "Hello, world!"
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Sample API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

// ✅ New endpoint: /api/status
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
