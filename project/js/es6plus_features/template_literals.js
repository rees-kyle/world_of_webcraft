// template literals: 
// - new kind of string literals with easy syntax
// - used to embed expressions within string literals
// - offers more functionality than traditional strings, including multiline strings and string interpolation
// - enclosed by backticks

let name = "Alice";

// declare and initialize a variable using a template literal 
let greeting = `Hello, ${name}!`;
// '${name}' is an expression placeholder that gets replaced by the value of the variable (string interpolation)

// result of the interpolation will be...
console.log(greeting); // output: Hello, Alice!


// multiline strings; simply create them by including line breaks within backticks

let address = `123 Main St.
New York, NY 10001`;

console.log(address);


// expression interpolation; to embed expressions

let a = 10;
let b = 20;
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // output: The sum of 10 and 20 is 30.


// tagged template literals:
// - template literals can be used with a function, called a tag function
// - to parse and modify the output of the template literal before it's output as a final string
// - used for more sophisticated manipulations like sanitization, localization and more complex text transformations

// define a tag function
function highlight(strings, ...values) {
// takes the template strings as the first argument and captures all interpolated expressions as subsequent arguments

    // the 'reduce' method is used to process and concatenate elements of the 'strings' array and the 'values'
    return strings.reduce((result, string, i) => {
    // 'result' is the accumulator, 'string' is the current value from the strings array, and 'i' is the current index

        // each string from the 'strings' array is concatenated with the corresponding value from the 'values' array
        return `${result}${string}${values[i] ? `<strong>${values[i]}</strong>` : ''}`;
        // if a value exists (i.e., it is not undefined), it is wrapped with <strong> tags to emphasize it
        // if no value exists (can happen if the final string segment follows the last expression), nothing is added
    }, '');
}

let anotherName = "Kyle";
let age = 28;
// use 'highlight' tag function with a template literal to create formatted taxt
let text = highlight `My name is ${anotherName} and I am ${age} years old.`;
// inserts the values of 'anotherName' and 'age' into the template literal and apply HTML strong tags to them

// formatted string, now containing HTML tags, is stored in 'text'
console.log(text);