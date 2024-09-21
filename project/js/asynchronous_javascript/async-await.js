// async/await; simplifies writing asynchronous javascript, making it easier to write, read and debug
// - async function; to return a promise which resolves with whatever the function returns or rejects
// - await keyword; within an async function. pauses the execution of the async function until promise resolves, returning the resolved value

// define an asynchronous function
async function fetchData() {
    try {
        // attempt to fetch data from the API endpoint
        const response = await fetch('https://api.example.com/data');
        // await the resolution of the fetch call and then convert the response to JSON
        const data = await response.json();
        return data;
    } catch (error) { // catch any errors that occur during the fetch or conversion process
        console.log("Error fetching data:", error);// log the error to the console for debugging purposes
    }
}


// error handling; use try/catch blocks
// - try; executes the await statements 
// - catch; catches any rejections


// chaining async operations; making code look almost synchronous, improving readability and maintainability 

async function processUsers() {
    // await the fetchData function call to retrieve users from the API endpoint
    const users = await fetchData('https://api.example.com/users');
    // 'await' ensures that the function waits here until the promise resolves with the data

    // fetch data for the first user's profile using the ID from the first user in the list
    const profile = await fetchData(`https://api.example.com/users/${users[0].id}`);
    // this assumes that 'users' is an array and users[0] is the first user object
    // the URL is dynamically constructed to include the first user's ID

    // return the profile data of the first user. this profile is the resolved value of the promise returned by 'processUsers' when it is called
    return profile;
}

// this example demonstrates how multiple asynchronous requests can be chained linearly without nesting


// mixing promises and async/await; use plain promises for simple cases or when performing multiple operations that can run concurrently

async function fetchMultipleResources() {

    // use 'Promise.all' to fetch both resources concurrently
    const [resources1, resources2] = await Promise.all([
    // 'Promise.all' takes an array of Promises and returns a single Promise that resolves when all of the input Promises have resolved
    fetch('https://api.example.com/resource1'),
    fetch('https://api.example.com/resource2')
    ]);

    // after both fetch calls resolve, convert the first fetched resource to JSON
    const data1 = await resource1.json();
    // await the resolution of calling '.json()' on resource1, which is a Promise that resolves with the parsed JSON

    // convert the second fetched resource to JSON
    const data2 = await resource2.json();

    // return an array containing the data from both resources
    return [data1, data2];
    // this array is what the function ultimately provides when the returned Promise resolves
}

// this example is more efficent than awaiting each fetch call squentially