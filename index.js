const express = require('express');
const app = express();
const port = 4000;

// Sample endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});