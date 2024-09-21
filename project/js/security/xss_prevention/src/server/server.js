// http-only cookies; to store session identifiers and other sensitive data, preventing them from being accessed via javascript

// first install express; run 'npm install express' in bash

// import the express library
const express = require('express');

// create an instance of an express application
const app = express();

// define a route that handles get requests to '/set-cookie'
app.get('/set-cookie', (req, res) => {
  // set a cookie named 'sessionId' with value 'abc123'
  // the 'httpOnly' flag ensures the cookie is not accessible via javascript
  res.cookie('sessionId', 'abc123', { httpOnly: true });

  // send a response to the client
  res.send('Cookie is set');
});

// start the server on port 3000
app.listen(3000, () => {
  // log a message indicating the server is running
  console.log('server is running on http://localhost:3000/set-cookie');
});


// start the server; run 'node src/server/server.js' in bash


// you can visit the endpoint 'http://localhost:3000/set-cookie' and check the cookie in the browser's developer tools