// callback functions: 
// - are functions passed into another function as an argument
// - to continue code execution after an asynchronous operation has completed
// - to perform long network requests, file operations and other tasks that take time without blocking main the thread

// example:

// function 'fetchData' that accepts one parameter 'callback'
function fetchData(callback) {
    // 'setTimeout' to simulate an asynchronous network request
    setTimeout(() => {
        // once timeout is over, call the 'callback' function
        callback("Data loaded"); // pass string as an argument to the callback
    }, 2000); // set timeout to 2000 miliseconds (2 seconds)
}

// call 'fetchData' function, providing a callback function as an argument
fetchData((data) => {
    // this callback function is executed once 'fetchData' completes its task
    // it receives the data ("Data loaded") form the 'fetchData' function
    console.log(data); // output: Data loaded
});


// handling errors:
// - in real-world scenarios potential errors in asynchronous operations must be handled
// - convention; to use "error-first callbacks"
// - first parameter is reserved for error object; if operation successful it is 'null', otherwise it contains error information

function FetchData(Callback) {
    setTimeout(() => {
        try {
            // inside the timeout function, simulate a successful data fetch
            let data = "Data loaded";
            // call the callback function with null as the error argument and the fetched data
            Callback(null, data);
        } catch (error) {
            // if an error occurs during data fetching, call the callback function with the error
            Callback(error, null);
        }
    }, 2000);
}

// callback function recieves two arguments: error and data
FetchData((error, data) => {
    // check if there's an error. if so, then log error message
    if (error) {
        console.error("An error occured:", error);
    // if there's no error, log the fetched data
    } else {
        console.log(data);
    }
});


// avoid excessive use of callbacks; consider using other techniques such as promises and asyn/await