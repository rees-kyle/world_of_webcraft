// import the http module
const http = require('http');

// define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// create the HTTP server
const server = http.createServer((req, res) => {
    // set the response status code to 200 (OK) 
    res.statusCode = 200; 

    // set the Content-Type header to plain text 
    res.setHeader('Content-Type', 'text/plain'); 

    // end the response with the message 'Hello World' 
    res.end('Hello World\n');
});

// make the server listen on the specified hostname and port
server.listen(port, hostname, () => {
    // log a message to the console indicating the server is running 
    console.log(`Server running at http://${hostname}:${port}/`);
});