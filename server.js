const express = require('express');
const app = express();

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World! The backend is working.');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
