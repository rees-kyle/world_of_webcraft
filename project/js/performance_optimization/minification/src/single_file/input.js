// function to greet a user by name
function greet(name) {
    // create a greeting message
    let message = "Hello, " + name + "!";
    // output the message to the console
    console.log(message);
}

// function to add two numbers
function add(a, b) {
    // return the sum of the numbers
    return a + b;
}

// call the add function with 5 and 3, and store the result
const result = add(5, 3);

// greet a user named alice
greet("Alice");

// output the result of the addition to the console
console.log("Result is: " + result);