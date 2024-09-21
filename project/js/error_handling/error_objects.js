// error objects:
// - a built-in constructor used for creating error objects 
// - when errors occur, javascript generates an error object that describes the error and stores information about where it happened

// creating an error object; using the 'Error' constructor
console.log("Creating an Error Object:");

// create a new error object with a specified message
let error = new Error("Something went wrong!"); // message is an optional string that describes the error
console.log(error.name);
console.log(error.message);


// types of built-in error objects:
console.log("Types of Built-in Error Objects:");
// - RangeError; thrown when a value is not in a set or range of allowed values
// - ReferenceError; thrown when there is an illegal reference
// - SyntaxError: thrown when a syntax error occurs while parsing code
// - TypeError: thrown when a value is not of an expected type
// - URIError: thrown when incorrect use of global uniform resource identifier (string of characters used to identify a resource either on internet or local network) handling functions occurs

// function to check if a number exceeds '100'
function checkNumber(num) {
    // if number is greater than 100, throw a 'RangerError'
    if (num > 100) {
        throw new RangeError("The number should be less than or equal to 100")
    }
    // if number is 100 or less, return the number
    return num;
}

// try block to attempt the 'checkNumber' function and handle potential errors
try {
    // call 'checkNumber' function with '101', which is above the threshold and should cause an error
    console.log(checkNumber(101));

// catch block to handle errors thrown by the 'checkNumber' function
} catch (e) {
    // log the name of the error
    console.log(e.name);
    // log the message of the error
    console.log(e.message);
}