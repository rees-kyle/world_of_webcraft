// array destructing:
console.log("Array Destructing:");
// - to break down elements of an array into individual variables
// - to access specific items in an array without accessing them through their indices

// example:
let numbers = [1, 2, 3];

// array destructing; assign elements of the array to three new variables
let [a, b, c] = numbers;
// 'a' get the value of the first element, 'b' gets the value of the second element etc

console.log(a);
console.log(b);
console.log(c);


// skipping elements; that you're not interested in
console.log("Skipping Elements:");

// example:
let [first, , third] = numbers; // skip the second element

console.log(first);
console.log(third);


// using rest parameter; to handle remaining elements after those destructed
console.log("Using Rest Parameter:");

// example:
let moreNumbers = [1, 2, 3, 4, 5];

let [anotherFirst, anotherSecond, ...rest] = moreNumbers;

console.log(anotherFirst);
console.log(anotherSecond);
console.log(rest);


// object destructing; for extracting properties directly into variables, handy for objects with many properties or complex structures
console.log("Object Destructing:");

// example:
let person = {
    name: 'Alice',
    age: 25,
    location: 'Wonderland'
};

// object destructing; to extract the properties
let { name, age, location } = person; // assign them to variables with the same names

// output the values of the cariables to the console, which holds the values of the properties from the object
console.log(name);
console.log(age);
console.log(location);


// new variable names; assign properties to new variable names, for preference or to avoid naming conflicts
console.log("New Variable Names:");

// example:
let anotherPerson = {
    name: 'Kyle',
    age: 28,
    location: 'Earth'
};

// object destructing; to extract the properties but also renaming them with new variable names
let {
    name: personName,
    age: personAge,
    location: personLocation
} = anotherPerson;

// output the values of the new variables to the console
console.log(personName);
console.log(personAge);
console.log(personLocation);


// default values; assigned to the destructed variables in case the property does no exist in the object
console.log("Default Values:");

// example:
let yetAnotherPerson = {
    yetAnotherName: 'James',
    location: 'Football Academy'
};

let { yetAnotherName, yetAnotherAge = 10 } = yetAnotherPerson;
// extracts the name as is
// assigns 'yetAnotherAge' a default value of '10', since it is not present in the object

console.log(yetAnotherName);
console.log(yetAnotherAge);

console.log(yetAnotherPerson.location);


// nested destructuring; to destructure nested properties as needed
console.log("Nested Destructuring:");

// example:
let fourthPerson = {
    name: 'Jason',
    age: '40',
    location: {
        // nested properties:
        country: 'United Kingdom',
        city: 'Cardiff'
    }
};

// object destructing; to extract 'name' and nested properties from 'location'
let {
    name: fourthName,
    location: {
        // extracting nested properties
        country,
        city
    }
} = fourthPerson;

console.log(fourthName);
console.log(country);
console.log(city);


// function parameter destructing; when functions receive objects as parameters, detructing can be used directly in the function declaration
console.log("Function Parameter Destructing:");

// example:
let fifthPerson = {
    fifthName: 'Centenarian',
    fifthAge: 100
};

// function that takes an object and uses destructing 
function greet({ fifthName, fifthAge }) {
    // extracts 'fifthName' and 'age' properties from the object passed as an argument
    console.log(`Hello, you can call me a ${fifthName}, I am ${fifthAge} years old.`);
    // prints a greeting message using the destructed values
}

greet(fifthPerson);