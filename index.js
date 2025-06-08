const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Route for root URL - sends "Hello, world!"
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Serve static files from 'client' directory for other requests
app.use(express.static(path.join(__dirname, 'client')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
