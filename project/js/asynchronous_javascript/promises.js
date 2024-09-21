// promises: 
// - objects that represents the eventual completion or failure of an asynchronous operation 
// - acts as a placeholder for a value that is initially unknown


// states:
// - pending; initial state, the operation has not been completed yet
// - fulfilled; successful state, a promised value is available
// - rejected; failure state, the operation failed and is holding an error value


// creating a promise:
// - by using the promise constructor which takes an execution function 
// - executed immediately
// - receives two functions as arguments: resolve and reject

const myPromise = new Promise((resolve, reject) => {
    // asynchronous operation
    const success = true; // simulate a condition
    if (success) {
        resolve("Operation was successful");
    } else {
        reject("Operation failed");
    }
});


// consuming a promise; by registering callbacks using .then(), .catch() and .finally() methods:

// .then():
// - to schedule a callback to be executed when the promise is fulfilled
// - chainable to perform additional asynchronous operations sequentially

myPromise
    .then(result => {
        console.log(result); // output: Operation was successful
        return result + " with more data";
    })
    .then(newResult => {
        console.log(newResult) // output: Operation was successful with more data
    });

// .catch() - to schedule a callback to be executed when the proimise is rejected

myPromise
    .catch(error => {
        console.error(error);
    });

// .finally():
// - schedules a callback when the promise is settled, regardless of its outcome
// - useful for cleaning up resources or logging

myPromise
    .finally(() => {
        console.log("This is called regardless of the outcome");
    });


// promises and error handling; catch and handle errors in the executor function, to avoid uncaught promise rejections

new Promise((resolve, reject) => {
    try {
        throw new Error("Something went wrong");
        resolve("Success");
    } catch (error) {
        reject(error);
    }
})
.catch(error => {
    console.error(error.message); // output: Something went wrong
});


// benefits of promises:
// - chainability; easy to chain multiple asynchronous operations
// - error handling; centralizes error handling using .catch()
// - synchronization; handle multiple operations using Promise.all()