// function declaration:
// - define a named function
// - hoisted; available throughout their scope, even before declaration in code

console.log("Function Declaration:")

function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // testing the function


// function expression:
// - define a function as part of an expression, often by assigning it to a variable
// - not hoisted, only able to call after defined

console.log("Function Expression:")

const adding = function(a, b) {
    return a + b;
}

console.log(adding(5, 7)); // testing the function