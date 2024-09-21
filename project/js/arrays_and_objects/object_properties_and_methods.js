console.log("Properties:");
// properties:
// - values associated with the object
// - describe characteristics of the object
// - accesed using dot notation (object.property) or bracket notation (object['property'])

// creating an object
let person = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// accessing properties using dot notation
console.log(person.name);

// accessing properties using bracket notation
console.log(person['age']);

console.log("Methods:");
// methods:
// - functions associated with an object
// - they allow the object to perform actions and manipulate it's own properties
// - defined as key-value pairs where the value is a function

let another_person = {
    name: "Kyle",
    age: "28",
    email: "kyle@example.com",
    greet: function() { // method
        console.log("Hello, my name is " + this.name); // 'this' refers to current object
    }
};

// calling the method
another_person.greet();


console.log("Constructor Functions:");
// constructor functions; traditional way to create objects
function constructorFunctionPerson(name, age) {
    this.name = name;
    this.age = age;
}

// add a method to the prototype
constructorFunctionPerson.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// create an instance of 'constructorFunctionPerson'
const person1 = new constructorFunctionPerson('James', 10);

// call the greet method
person1.greet();


console.log("Classes:");
// classes; more modern and clearer syntax for creating objects and dealing with inheritance


// define a class
class personClass {
    // constructor method to initialize object properties
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }

    // method defined within the class
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// create an instance of 'personClass'
const person2 = new personClass('Bob', 25);

// call the greet method
person2.greet();