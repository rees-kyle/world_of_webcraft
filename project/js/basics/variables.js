// var - avoid using unless specific reason
var name = "Kyle";
var age = 28;

function greet() {
    var message = "Hello, " + name;
    console.log(message);
}

greet();


// let - when you need to reassign variables
if (age >= 18) {
    let status = "adult";
    console.log(name + " is an " + status);
}


// const - default; constant and can not be changed
const PI = 3.14;
const student = {
    name: "Kyle",
    age: 28
};

// PI = 3.14159; attempting to reassign will throw an error

// however, you can mutate the properties of a constant object using dot notation
student.age = 30;

console.log(PI);
console.log(student);