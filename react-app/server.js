const express = require('express');
const path = require('path');

// Create Express app
const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Define a route for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
