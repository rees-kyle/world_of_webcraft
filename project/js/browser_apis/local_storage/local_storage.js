// local storage api:
// - part of web storage api
// - enables web applications to store data locally within the user's browser
// - local storage is saved across browser sessions; the data persists even after the browser window is closed and reopened, unlike session storage

// local storage provides a simple key-value store mechanism and is generally used to store non-sensitive data

// key features:
// - persistence; persistent until deleted, changes made are saved and available for all current and future visits
// - domain specific; data stored is specific to the protocol of the page, accessible only by pages from the same domain that set the data
// - storage limit; typically 5mb per domain but can vary
// - synchronous api; maining they can potentially block the main thread if dealing with large amounts of data


// setup process:
// import the 'LocalStorage' class from the node-localstorage package
const { LocalStorage } = require('node-localstorage');

// create an instance of 'LocalStorage'
const localStorage = new LocalStorage('./scratch'); // './scratch' is the directory where the data will be stored


// setting items:
// to store data you can use the 'setItem()' method, it takes two arguments: key and value (both need to be strings)

// store a value
localStorage.setItem('username', 'JohnDoe'); // 'username' is the key and 'JohnDoe' is the value


// getting items:
console.log("Getting Items:");
// to retrieve data you can use the 'getItem' method with one argument; the key of the data you want to retrieve

// retrieve and log the value stored with the key 'username'
const username = localStorage.getItem('username');

// log the retrieved value to the console
console.log("Username before deletion:", localStorage.getItem('username'));
// if 'username' is not found, it will output 'null'


// removing items:
console.log("Removing Items:");
// to delete an item you can use the 'removeItem' method with one argument; the key of the item you want to delete

// delete a specific item
localStorage.removeItem('username');

// check if the item is deleted
const itemAfterDeletion = localStorage.getItem('username');

if (itemAfterDeletion === null) {
    console.log("The item was successfully deleted.")
} else {
    console.log("The item still exists:", itemAfterDeletion);
}


// clearing all data:
console.log("Clearing All Data:");
// to remove all data stored in local storage for a domain you can use the 'clear()' method

// store some values
localStorage.setItem('username', 'KyleRees');
localStorage.setItem('email', 'kyle-rees@example.com');

// retrieve and log values to verify existence
console.log('Username before clearing:', localStorage.getItem('username'));
console.log('Email before clearing:', localStorage.getItem('email'));

// remove all items stored under the current domain
localStorage.clear();

// check if all items are removed
const usernameAfterClear = localStorage.getItem('username');
const emailAfterClear = localStorage.getItem('email');

if (usernameAfterClear === null && emailAfterClear === null) {
    console.log("All items have been successfully cleared.");
} else {
    console.log("Some items exist after clearing:");
    console.log("Username after clearing:", usernameAfterClear);
    console.log("Email after clearing:", emailAfterClear);
}


// checking storage length:
console.log("Checking Storage Length:");
// you can find out how many key/value pairs are in the local storage by using the 'length' property

// Store some values in localStorage
localStorage.setItem('username', 'TheProtagonist');
localStorage.setItem('email', 'the.protagonist@tenet.com');

// return number of key/value pairs currently stored
const numberOfItems = localStorage.length;

// log the number of items to the console
console.log(numberOfItems);


// looping through keys:
console.log("Looping Through Keys:");
// you can loop through all keys in local storage using a 'for' loop

// 'for' loop that runs from '0' to the number of items in local storage
for (let i = 0; i < localStorage.length; i++) {
    // retrieve the key for each item at the index 'i'
    const key = localStorage.key(i);
    // use the retrieved key to get the corresponding value
    const value = localStorage.getItem(key);

    // log the key-value pair to the console
    console.log(`${key}: ${value}`); // show both the key and the value
    // used for debugging, ensuring that the correct data is stored and can be retrieved as expected
}


// use cases for local storage:
// - saving user preferences or settings, locally
// - storing information needed across sessions, such as the user's last activity or state of the application
// - caching data locally to reduce network requests

// limitations and considerations for local storage:
// - local Storage is not suitable for storing sensitive information as it is easily accessible through the browser's developer tools
// - the synchronous nature of local storage means it could affect the performance of your web applications if large amounts of data are read or written
// - data in local storage is limited in size and larger data needs should consider 'IndexedDB' or server-side storage solutions

// local storage is widely supported in modern browsers for enhancing user experience by keeping necessary data close at hand without the need for constant server queries