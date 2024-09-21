// array methods; for modifying and looping through arrays

// forEach(); executes a provided function once for each array element=
console.log("forEach():");

const array = [1, 2, 3, 4,];
array.forEach((element) => {
    console.log(element);
});


// map(); creates a new array within the results of calling a provided function on every element in the calling array
console.log("map():");

const mappedArray = array.map((element) => {
    return element * 2;
});

console.log(mappedArray);


// filter(); creates a new array with all elements that pass the test implemented by the provided function
console.log("filter():");

const filteredArray = array.filter((element) => {
    return element > 2;
});

console.log(filteredArray);


// reduce(); applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
console.log("reduce():");

// Using the reduce() method to sum up all elements in the array
// The reduce() method takes two arguments:
// 1. A callback function that is executed on each element of the array
// 2. An initial value for the accumulator (in this case, 0)
const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    // The callback function takes two parameters:
    // - accumulator: the accumulated value from previous iterations (starts at 0)
    // - currentValue: the current element being processed in the array
}, 0); // 0 is the initial value for the accumulator

console.log(sum);


// find(); returns the value of the first element in the array that satisfies the provided testing function
console.log("find():");

// Using the find() method to locate the first element in the array that is greater than 2
// The find() method takes a callback function that is executed on each element of the array
const foundElement = array.find((element) => {
    // The callback function takes one parameter:
    // - element: the current element being processed in the array
    // The function returns true if the element is greater than 2, false otherwise
    return element > 2;
});

console.log(foundElement);


// some(); checks if at least one element in the array passes the test implemented by the provided function
console.log("some():");

// Using the some() method to check if there is any element in the array that is greater than 2
// The some() method takes a callback function that is executed on each element of the array
const hasGreaterThanTwo = array.some((element) => {
    // The callback function takes one parameter:
    // - element: the current element being processed in the array
    // The function returns true if the element is greater than 2, false otherwise
    return element > 2;
});

console.log(hasGreaterThanTwo);


// every(); checks if all elements in the array pass the test implemented by the provided function
console.log("every():");

// Using the every() method to check if all elements in the array are greater than 0
// The every() method takes a callback function that is executed on each element of the array
const allGreaterThanZero = array.every((element) => {
    // The callback function takes one parameter:
    // - element: the current element being processed in the array
    // The function returns true if the element is greater than 0, false otherwise
    return element > 0;
});

console.log(allGreaterThanZero);