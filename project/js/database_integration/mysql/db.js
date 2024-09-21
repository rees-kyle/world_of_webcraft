// Import the mysql2 library
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',         // MySQL server host
  user: 'rees-kyle',          // MySQL username
  password: 'password',      // MySQL password
  database: 'mydatabase'     // Name of the database to connect to
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Export the connection object for use in other files
module.exports = connection;
