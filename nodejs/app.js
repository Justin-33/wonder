// Import required modules
const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

// Create an instance of Express app
const app = express();
const SERVER_PORT = 3000;

// Function to establish the database connection with retry mechanism
function connectToDatabase() {
  const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      // Retry connecting after a delay (e.g., 3 seconds)
      setTimeout(connectToDatabase, 5000);
    } else {
      console.log('Connected to the database.');

      // Create the database if it doesn't exist
      connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME}`, (err) => {
        if (err) {
          console.error('Error creating the database:', err);
          // Retry connecting after a delay (e.g., 3 seconds)
          setTimeout(connectToDatabase, 5000);
        } else {
          console.log('Database created or already exists.');

          // Connect to the specific database
          connection.changeUser({ database: process.env.DATABASE_NAME }, (err) => {
            if (err) {
              console.error('Error selecting the database:', err);
              // Retry connecting after a delay (e.g., 3 seconds)
              setTimeout(connectToDatabase, 5000);
            } else {
              console.log('Database selected.');

              // Start the server once the database connection is established
              app.listen(SERVER_PORT, () => {
                console.log(`Server is running on port ${SERVER_PORT}`);
              });
            }
          });
        }
      });
    }
  });
}

// Call the connectToDatabase function to establish the connection
connectToDatabase();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
