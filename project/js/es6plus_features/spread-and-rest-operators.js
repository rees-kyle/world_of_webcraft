// both operators look similar, but they serve different purposes depending on how they are used in the code

// spread operator: 
console.log("Spread Operator");
// - lets you unpack elements from arrays, strings, or objects in places where multiple values are needed
// - for arrays, it unpacks elements for functions or array literals
// - for objects, it unpacks key-value pairs for object literals
// essentially, it simplifies passing multiple items or properties into functions or new data structures

// examples:

// combining arrays:
console.log("Combining Arrays:");

const first = [1, 2, 3];
const second = [4, 5, 6];

// use the spread operator to combine both arrays into a new array
const combined = [...first, ...second]; // expands both arrays into individual elements
// the order they appear will be the order they will merge

console.log(combined);


// copying an array:
console.log("Copying an Array:");

const original = [7, 8, 9];

// create a shallow copy of the 'original' array
const copy = [...original]; // expands the elements of 'original' into a new array 'copy'
// 'copy' will have the same elements as 'original', but is a separate array object

console.log(copy);


// expanding a string into an array of characters:
console.log("Expanding a String into an Array of Characters:");

const greeting = 'Hello';

const chars = [...greeting]; // Each character in the string becomes an element in the new array 'chars'

console.log(chars);


// objects:
console.log("Objects:");

// define first object with two properties
const obj1 = { foo: 'bar', x: 42 };

// define second object, 'foo' property overlaps with first object
const obj2 = { foo: 'baz', y: 13 };

// use spread operator to merge 'obj1' and 'obj2' into a new object
const mergedObj = {...obj1, ...obj2};
// properties from obj2 will overwrite properties from obj1 if they have the same key

console.log(mergedObj); // the 'foo' property is overwritten by the last provided value 'baz'



// rest operators:
console.log("Rest Operator");
// - to represent an indefinite number of arguments as an array
// - useful in function definitions, where the exact number of arguments is not known beforehand or where multiple arguments need to be handled as a group

// examples:

// collecting function arguments into an array:
console.log("Collecting function arguments into an array:");

function sum(...nums) { // the rest operator is used to gather all individual arguments passed to the function into an array named 'nums'

    // use the 'reduce' method to sum up all elements in the 'nums' array
    return nums.reduce((a, b) => a + b, 0);
    // 'reduce' takes a callback function that processes each element (a, b) to produce a single output, starting from an initial value of 0

}

// call the 'sum' function with five numbers as arguments
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// the function calculates the sum of all the provided numbers


// destructing arrays:
console.log("Destructing Arrays:");

const numbers = [1, 2, 3, 4, 5];

// use destructuring to assign the first two elements of the array to variables
const [anotherFirst, anotherSecond, ...rest] = numbers;
// the rest operator '...' is used to gather the remaining elements into an array named 'rest'

console.log(anotherFirst, anotherSecond); // shows the first two extracted elements from the array
console.log(rest); // illustrates that 'rest' has captured elements [3, 4, and 5] from 'numbers'


// passing the rest of the properties to a function:
console.log("Passing the Rest of the Properties to a Function:");

const person = { name: 'John', age: 28, job: 'Engineer' };

// use object destructuring to extract the 'name' property into a variable 'name'
const { name, ...restProps } = person;
// use the rest operator to gather all remaining properties into a new object 'restProps'

console.log(name); // outputs the extracted 'name' property to the console; demonstrating how to access a single property directly
console.log(restProps); // outputs the remaining properties


// both spread and rest operators simplify handling multiple parameters in functions and merging, copying or expanding arrays and objects