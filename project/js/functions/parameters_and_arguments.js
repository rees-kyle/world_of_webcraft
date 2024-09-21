// parameters
// - the variables listed inside the parentheses
// - placeholders for values that will be passed to the function when it is called
// - used to define the inputs a function expects to receive
// - local variables to the function, only accessible within the function's scope

function greet(name) { // 'name' is the parameter
    console.log("Hello, " + name + "!");
}


// arguments
// - the actual values that are passed to a function when it is invoked (called)
// - correspond to the parameters defined in the function declaration
// - functions can be called with any number of arguments, including none

greet("Kyle"); // "Kyle" is the argument


// parameters vs arguments
// - parameters are variables in the function declaration
// - arguments are the actual values passed to the function when it is called

function add(a, b) {
    return a + b;
}

console.log(add(5, 3,)); // Here, '5' and '3' are arguments passed to the 'add' function


// summary
// parameters are used in function declaration to define the inputs a function expects,
// while arguments are the values passed to a function when it is called