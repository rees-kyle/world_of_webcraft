// geolocation api: 
// - to obtain the geographical position (latitude and longitude) of a user's device
// - useful for enhancing local search results, providing directions or automatically setting location preferences
// - user must grant permission

// geolocation api is accessed through the 'navigator.geolocation' object provided by the browser's javascript environment, mainly offers three methods:
// - 'getCurrentPosition(success, error, options)': retrieves the device's current location
// - 'watchPosition(success, error, options)': registers a handler that will be called automatically every time the position changes
// - 'clearWatch(watchId)': unregisters handlers set up with 'watchPosition'

// before using the geolocation api, check if it is supported by the user's browser:

// check if the geolocation api is available in the navigator object
if ("geolocation" in navigator) {
    // geolocation api is supported, you can now call navigator.geolocation methods here
} else {
    // geolocation api is not supported, and alert the user
    alert("Geolocation is not supported by your browser");
}


// getting the current position:
// use the 'getCurrentPosition()' method which is asynchronous and requires callback functions to handle the success or failure of the data retrieval

// define 'success' callback function
function success(position) {
    // extract latitude and longitude from the position object
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // log the latitude and longitude to the console
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
}

// define 'error' callback function
function error(err) {
    // log any errors that occur during the process to the console
    console.error(`Error occured: ${err.message}`);
}

// request the current geographical position of the device
// navigator.geolocation.getCurrentPosition(success, error); // provide the success and error functions as callbacks


// watching position changes:
// to track location changes used for live location features in applications, use 'watchPosition()'

// start watching user's location changes continuously
const watchID = navigator.geolocation.watchPosition(success, error); // 'success' and 'error' callback functions; to handle location data or errors respectively

// 'clearWatch' method to stop watching user's location
navigator.geolocation.clearWatch(watchID);
// can be triggered by some user action or condition in application

// function to stop watching the user's location
function stopWatching() {
    navigator.geolocation.clearWatch(watchID);
    console.log("Stopped watching location.");
}

setTimeout(stopWatching, 30000); // stop watch location after 30 seconds


// options: 
// both 'getCurrentPosition' and 'watchPosition' accept an optional third parameter for configuring the behavior of the api

// define options for geolocation request
const options = {

    // request high accuracy for the position which might use gps and consume more battery
    enableHighAccuracy: true,

    // maximum time allowed to try getting a position in milliseconds
    time: 5000, // 5 seconds
    // if the position is not obtained within this time, the error callback is triggered

    // maximum age of a cached position that is acceptable to return in milliseconds
    maximumAge: 60000 // 60 seconds
    // if a cached position exists and is younger than this age, it may be returned instead of fetching a new position
};

navigator.geolocation.getCurrentPosition(success, error, options); // 'options' is an object containing options for the request as defined in this example


// privacy considerations; handle geolocation with care
// - always reuest permission from the user before attempting to access their location
// - explain why you need the location data
// - ensure the location data is transmitted and stored securely if necessary

// browser support; the geolocation api is widely supported but how it determines location (gps, wi-fi, cellular networks, ip address) can vary between devices and browsers

// by using the geolocation api responsibly and effectively, developers can create more interactive and personalized experiences for users