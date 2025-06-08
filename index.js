const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from TRUST MARVINZ Node.js website!</h1>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
