// Import necessary libraries
const express = require('express');
const app = express();
const connection = require('./db'); // Import the database connection

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to get data from the database
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).send('Database query error');
      return;
    }
    res.json(results);
  });
});

// Define a route to add data to the database
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email are required');
  }

  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  connection.query(query, [name, email], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Database insert error');
    }
    res.status(201).send('User added');
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
