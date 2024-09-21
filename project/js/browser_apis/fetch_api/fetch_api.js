// fetch api: 
// - for making http requests to servers from web browsers and processing responses
// - the api returns promises, enabling a cleaner and more efficient way to manage asynchronous operations compared to callbacks

// key features:
// - flexible and powerful; supports a wide range of http requests and can handle various data formats
// - stream interface; to start processing recieved data as soon as chunks are available, instead of waiting for the entire response
// - control over request and response; setting of request headers, caching strategies, credentials and more, also provides access to metadata about the response

// making a 'GET' request:

// import the 'node-fetch' module to use the fetch api using ES (ECMAScript) module syntax
import fetch from 'node-fetch';

// use 'fetch' api to make an http 'GET' request to specified url
fetch('https://api.github.com/users/github') // a valid api endpoint

    // first '.then' checks if response from server is successful, if response status is not in range of 200-299, throw an error
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }

    // if response is successful, parse the json body of the response
    return response.json();
    })

    // after converting response to json, log json data to console
    .then(data => {
        console.log(data);
    })
    // if there is any error during fetch or during response processing, it will be caught here and logged to the console
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });


// making a 'POST' request:
// send data to a server by specifying an additional init object that allows you to control various setting like method, headers, body and more

// define data object to send to server
const data = { user: 'KyleRees' };

// use fetch api to send http post request to server
fetch('https://jsonplaceholder.typicode.com/posts', {
    // specifies method for request ('POST' or 'PUT')
    method: 'POST',
    headers: {
        // sets content type of requests to json
        'Content-Type': 'application/json',
    },
    // converts data object into json string; to be sent in request body
    body: JSON.stringify(data),
    })

    .then(response => {
        // parses json response into a javascript object after the request is completed
        return response.json();
    })
    .then(data => {
        // logs success message and data received from server to console
        console.log('Success:', data);
    })
    .catch(error => {
        // catches and logs any errors that occured during fetch operation
        console.error('Error:', error);
    });


// error handling:
// the fetch api itself does not throw an error for http error statuses (like 404 or 500), instead the promise resolves (response.ok set to false) normally and it must be handled explicitly

// fetch request to specified url
fetch('https://httpstat.us/404')
    .then(response => {
        // checks if the response from the server is successful
        if (!response.ok) {
            // if the response has an http status code indicating an error (outside 200-299)...
            throw new Error(`HTTP error! status: ${response.status}`); // throw an 'Error' with a message including the status code
        }
        // if response is successful, parse json body of response; to convert it into javascript object
        return response.json();
    })

    // after parsing json, log data object to console
    .then(data => console.log(data))
    // catch any errors thrown in fetch or json parsing phase, and log a custom error message along with error object
    .catch(error => console.error("There was a problem with your fetch operation:", error)); 


// advanced features:
// - abort a fetch; if you need to cancel a request due to user interaction (like navigation or simply aborting a file download)
// - (compatible) integrating with service workers; to easily cache or modify requests and responses