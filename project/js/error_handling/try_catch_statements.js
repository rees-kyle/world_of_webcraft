// try...catch statements; prevents the application from crashing by catching exceptions that occur during the execution of code blocks

// basic syntax; consists of a 'try' block to wrap potentially error-prone code, followed by one or more 'catch' blocks to handle any exceptions thrown within the 'try' block

console.log("Example:");
// example:

try {
    // attempt to access a variable that has not been defined
    // this will throw a ReferenceError because 'nonExistentVariable' does not exist in the scope
    console.log(nonExistentVariable);

} catch (error) { // 'error' holds information about the error that occured
    // log the error message to the console
    console.error("Caught an error:", error);
    // it outputs errors to the web console, making them stand out for easier debugging
}


console.log("The Finally Clause:");
// the 'finally' clause: 

// - executed after the try and catch blocks, regardless of whether an exception was thrown or not
// - useful for cleaning up resources or performing cleanup operations

try {
    // throw an error with a custom message
    throw new Error("Something went wrong!");
    // this simulates an error condition and demonstrates the use of 'throw' to create an exception

} catch (error) {
    // this block is executed if an error is thrown in the try block

    // output the error information to the console
    console.error("Error encountered:", error);

} finally {
    // useful for including cleanup code or other final actions that need to run irrespective of the outcome

    console.log("This runs no matter what");
}


// error object; contains at least a name and a message property, providing details about the type and description of the error


console.log("Custom Errors:");
// advanced usage: custom errors; using 'throw' followed by an error object, useful for handling specific kinds of errors in a more controlled way

try {
    // custom condition check
    let age = -10; // initialize the 'age' variable with an invalid value of '-10'

    // check if the age is less than 0, to ensure that age values are logically correct (non-negative)
    if (age < 0) {
        // if the condition is true (age is negative), throw a custom error with an explanation
        throw new Error("Age cannot be negative.");
    }
} catch (error) {
    // this catch block catches the custom 'Error' thrown when 'age' is negative

    // output the error message to the console
    console.error("Caught an error:", error);
}