/*
return statements; to specify the value that a function should return
when it is invoked
*/

function add(a, b) {
    return a + b;
}

let result = add(3, 4); // answer gets stored in the 'result' variable

console.log(result);


/*
a return statement can appear anywhere in a function, 
once executed it immediately exits the function, 
ignoring any subsequent code
*/

function foo() {
    console.log("Hello");
    return 42; // this will cause the function to exit immediately after printing "Hello"
    console.log("World"); // this will never be executed
}

foo();


// fucntions without a return statement return 'undefined'

/*
function greet(name) {
    console.log("Hello, " + name + "!");
}
*/

// fixed code
function greet(name) {
    return "Hello, " + name + "!";
}

let message = greet("Kyle");
console.log(message);