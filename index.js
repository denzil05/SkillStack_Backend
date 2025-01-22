const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = process.env.PORT || 4000;

// Enable CORS for all requests
app.use(cors());

// Sample endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});