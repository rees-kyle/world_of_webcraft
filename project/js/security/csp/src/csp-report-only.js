// CSP in report-only mode:
// - test and monitor how a policy affects your application without blocking any content
// - identify and address potential issues, refine the policy, and ensure a smooth transition to enforcement mode, 
//   thereby avoiding disruptions and ensuring both security and functionality


// example:

const express = require('express'); // import the 'express' library
const helmet = require('helmet'); // import the 'helmet' library for security

const app = express(); // create an instance of an express application

const port = 3000; // define the port for the server

// define your CSP directives
const cspDirectives = {
  defaultSrc: ["'self'"], // allow resources to be loaded only from the same origin
  scriptSrc: ["'self'", "https://cdnjs.cloudflare.com"], // allow scripts from the same origin and from cdnjs
  styleSrc: ["'self'", "https://cdnjs.cloudflare.com"], // allow styles from the same origin and from cdnjs
  imgSrc: ["'self'", "data:"], // allow images from the same origin and data URIs
  connectSrc: ["'self'"], // allow connections (e.g., AJAX) only to the same origin
  reportUri: '/csp-violation-report-endpoint', // endpoint to receive CSP violation reports
};

// middleware to parse JSON bodies from incoming requests
app.use(express.json());

// use 'helmet' to set CSP in report-only mode
app.use(
  helmet.contentSecurityPolicy({
    directives: cspDirectives, // apply the CSP directives defined above
    reportOnly: true, // enable report-only mode (violations are reported but not enforced)
    reportUri: '/csp-violation-report-endpoint', // endpoint to receive violation reports
  })
);

// endpoint to receive and log CSP violation reports
app.post('/csp-violation-report-endpoint', (req, res) => {
  console.log('CSP Violation Report:', req.body); // log the violation report to the console
  res.status(204).end(); // send a '204 No Content' response to acknowledge receipt
});

// sample route to serve a test page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSP Test</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      <style>
        body { font-family: Arial, sans-serif; }
        .test { color: red; }
      </style>
    </head>
    <body>
      <h1 class="test">CSP Test Page</h1>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script>
        console.log('This is a test script.');
      </script>
    </body>
    </html>
  `); // serve a simple HTML page with external resources
});

// start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); // Log the server URL
});


// run 'node src/csp-report-only.js' in bash ensuring you're in the correct directory

// use 'cURL' to send an HTTP request to your server and check the response, open a new terminal window and run 'curl -I http://localhost:3000'