// import the required libraries
const { JSDOM } = require('jsdom'); // to create a virtual dom environment that mimics a web browser's dom in node.js
const DOMPurify = require('dompurify'); // to sanitize html, removing potentially harmful content to prevent xss attacks

// create a virtual dom environment with jsdom
const window = new JSDOM('').window;
const purify = DOMPurify(window);

// define dirty html
const dirtyHTML = '<b>Hello World!</b><script>alert("Hacked!");</script>';

// sanitize the dirty html
const cleanHTML = purify.sanitize(dirtyHTML);

// output the sanitized html
console.log(cleanHTML);