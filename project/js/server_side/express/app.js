// import the express module
const express = require('express');

// create an instance of express
const app = express();

// define a port to listen on
const PORT = process.env.PORT || 3000; // using an environment variable if available, otherwise defaulting to 3000

// define a simple route for the root URL
app.get('/', (req, res) => { res.send('Hello, World!'); // send a response to the client
});

// start the server and listen on the defined port
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); // log that the server is running
});