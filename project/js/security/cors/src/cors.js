// cross-origin resource sharing (CORS):
// - a security feature implemented in web browsers to prevent malicious websites from making unauthorized requests to resources on a different domain
// - controlled through HTTP headers that specify which origins are permitted to access resources on the server and which HTTP methods are allowed

// when a web page makes a request to a different domain (from https://example.com to https://api.anotherdomain.com);
// the browser checks the response headers to determine if the request is allowed, CORS is used to manage these cross-origin requests

// key concepts:
// - simple requests; basic HTTP requests that meet certain criteria, such as using standard methods like 'GET', 'POST', or 'HEAD', and having safe headers like 'Accept' and 'Content-Type'
// - prefilght requests; A preflight request is an HTTP OPTIONS request sent by the browser to check if the actual request is permitted, with the server responding through headers to indicate this...
// - CORS headers:
    // - 'Access-Control-Allow-Origin'; specifies which origins can access the resource, a wildcard (*) allows access from any origin
    // - 'Access-Control-Allow-Methods'; lists the HTTP methods that are permitted when accessing the resource
    // - 'Access-Control-Allow-Headers'; specifies which headers can be used in the actual request
    // - 'Access-Control-Allow-Credentials'; indicates whether or not the response to the request can be exposed when the credentials flag is true (e.g., cookies, HTTP authentication)
    // - 'Access-Control-Max-Age'; indicates how long the results of a preflight request can be cached


// example:

// first, initialize a node project; 'npm init -y' in bash

// second, install libraries; 'npm install express cors' in bash

// import the 'express' module
const express = require('express');
// import the 'cors' module
const cors = require('cors');

// create an instance of an express application
const app = express();

// enable CORS for all origins and HTTP methods by default
app.use(cors());

// define advanced CORS options for more specific control
const corsOptions = {
    origin: 'https://example.com', // specify the allowed origin
    methods: 'GET,POST,PUT,DELETE', // specify the allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // specify the allowed headers in requests
    credentials: true, // allow sending credentials such as cookies
    optionsSuccessStatus: 204 // set the response status code for successful OPTIONS preflight requests
};

// apply the advanced CORS configuration with the defined options
app.use(cors(corsOptions));

// define a route handler for the /data endpoint
app.get('/data', (req, res) => {
    // respond with a JSON object
    res.json({ message: 'This is CORS-enabled for a specific origin.' });
});

// start the server on port 3000 and log a message to the console when it starts
app.listen(3000, () => {
    console.log('Server running on port 3000');
});


// run 'node src/cors.js' in bash ensuring you're in the correct directory

// use 'cURL' to send an HTTP request to your server and check the response, open a new terminal window and run 'curl -i http://localhost:3000/data'


// security considerations:
// - least privilege principle; only allow the minimum necessary access by specifying the exact origins, methods, and headers required
// - credentials; be cautious when allowing credentials (if 'Access-Control-Allow-Credentials' is set to 'true', you cannot use a wildcard (*) for 'Access-Control-Allow-Origin')
// - preflight caching: use 'Access-Control-Max-Age' to reduce the number of preflight requests, improving performance

// troubleshooting CORS issues: 
// - check headers; ensure the server response includes the correct CORS headers
// - preflight requests; verify that preflight requests are correctly handled on the server
// - browser console; look at the browser console for CORS-related errors, which often provide clues about what went wrong

// by properly configuring CORS; you can enable secure and controlled cross-origin requests in your web applications, enhancing both security and user experience