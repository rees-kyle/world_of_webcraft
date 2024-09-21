// cross-site scripting (xss) prevention

// cross-site scripting (xss):
// - a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users
// - can lead to unauthorized access to user data, session hijacking, and other malicious activities

// preventing xss attacks in javascript involves several strategies:


// output encoding:
// - encode all user input before rendering it to the browser this prevents the execution of injected scripts
// - use functions like 'textContent' for html or attributes to ensure that user data is treated as plain text

// this is the user input which contains a potentially malicious script tag
const userInput = "<script>alert('XSS')</script>";

// create a new 'div' element to safely display the user input
const safeOutput = document.createElement('div');

// set the 'textContent' of the div to the user input
safeOutput.textContent = userInput;
// this will escape any html tags, ensuring they are displayed as plain text rather than being executed

// display the sanitized output
document.getElementById('sanitized-output').appendChild(safeOutput);


// input validation:
// - validate and sanitize user inputs on both the client and server sides
// - reject or sanitize inputs that contain potentially dangerous characters or patterns

// function to sanitize user input by removing potentially dangerous characters
function sanitizeInput(input) { 
    // regular expression to match less than (<), greater than (>), and forward slash (/) characters
    const regex = /[<>\/]/g;  
    // replace the matched characters with an empty string to remove them from the input
    return input.replace(regex, '');
}

// example user input that includes a potential cross-site scripting (XSS) attack
const secondUserInput = "<script>alert('XSS')</script>";

// sanitize the user input by removing dangerous characters
const sanitizedInput = sanitizeInput(secondUserInput); // "<script>alert('XSS')</script>" becomes "scriptalert('XSS')script"

// the 'sanitizedInput' variable now contains the sanitized version of the user input
console.log(sanitizedInput);