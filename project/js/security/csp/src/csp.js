// content security policy (CSP):
// - a security feature that helps prevent various types of attacks such as Cross-Site Scripting (XSS) and data injection attacks
// - implemented via HTTP headers and can be configured to control which resources the browser is allowed to load for a given page
// - by restricting the sources of content, CSP reduces the risk of malicious content being executed


// implementation; in a node.js application, you can use middleware to set the CSP header for HTTP responses

// example using the 'helmet' middleware:

// first, initialize a node project; 'npm init -y' in bash
// second, install libraries; 'npm install express helmet' in bash

const express = require('express');  // Import the 'express' library
const helmet = require('helmet');    // import the 'helmet' library for security

const app = express();              // create an instance of an express application

// define CSP directives
const cspDirectives = {
  defaultSrc: ["'self'"],           // allow resources to be loaded only from the same origin
  scriptSrc: ["'self'", "https://apis.example.com"], // allow scripts from the same origin and from 'apis.example.com'
  styleSrc: ["'self'", "'unsafe-inline'"],  // allow styles from the same origin and inline styles (using 'unsafe-inline' can reduce security)
  imgSrc: ["'self'", "data:"],      // allow images from the same origin and data URIs
  connectSrc: ["'self'"],           // allow connections (e.g., AJAX) only to the same origin
  fontSrc: ["'self'", "https://fonts.example.com"], // allow fonts from the same origin and from 'fonts.example.com'
  objectSrc: ["'none'"],            // disallow loading of plugins like Flash, etc.
};

// apply CSP using 'helmet' middleware
app.use(
  helmet.contentSecurityPolicy({
    directives: cspDirectives, // apply the CSP directives defined above
  })
);

// define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, CSP!'); // Send a simple response to the client
});

// start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000'); // Log the server URL
});


// run 'node src/csp.js' in bash ensuring you're in the correct directory

// use 'cURL' to send an HTTP request to your server and check the response, open a new terminal window and run 'curl -I http://localhost:3000'