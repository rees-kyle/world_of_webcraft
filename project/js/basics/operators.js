// arithmetic operators
console.log("Arithmetic Operators:")

// addition
let addition = 5 + 3;
console.log(addition);

// subtraction
let subtraction = 4 - 1;
console.log(subtraction);

// multiplication
let multiplication = 5 * 10;
console.log(multiplication);

// division
let division = 50 / 2;
console.log(division)

// modulus (remainder)
let modulus = 10 % 6;
console.log(modulus);


// assignment operators; to assign values to variables
console.log("Assignment Operators:")

// add and assign
let x = 5;
x += 4;
console.log(x);

// subtract and assign
let y = 10;
y -= 4;
console.log(y)

// multiply and assign
let z = 2;
z *= 6;
console.log(z);

// divide and assign
let w = 20;
w /= 4;
console.log(w);

// modulus (remainder) and assign
let m = 15;
m %= 4;
console.log(m);


// comparision operators; to compare two values and return a boolean result
console.log("Comparision Operators:")

let a = 5;
let b = 10;

// equality; checks if two values are equal
console.log(a == b);

// less than; checks if one value is less than another
console.log(a < b);

// greater than; checks if one value is greater than another
console.log(a > b);

// strict inequality: checks if two values are not strictly equal
console.log(a !== b);


// logical operators; to combine or invert boolean values
console.log("Logical Operators:")

let p = true;
let q = false;

// logical AND; returns true if both operands are 'true'
console.log(p && q);

// logical OR; returns true if at least one operand is 'true'
console.log(p || q);

// logical NOT; returns the opposite of the operand's boolean value
console.log(!p);


// unary operators
console.log("Unary Operators:")

let num = 5;

// unary negation; negates a number
console.log(-num);

// unary plus; converts an operand into a number
let strNumber = "42";
console.log(+strNumber);

// increment; increases the value of a variable by 1
num++;
console.log(num);

// decrement; decreases the value of a variable by 1
num--;
console.log(num);


// conditional (ternary) operator; a shorthand for if-else statements
// syntax   condition ? expression1 : expression2
console.log("Conditional (Ternary) Operator:");

let age = 20;
let status = (age >= 18) ? 'Adult' : 'Minor'; // if age is 18 or older, status is 'Adult', else 'Minor
console.log(status);


// string operators; for string concatenation
console.log("String Operators:")

let str1 = "Hello";
let str2 = " World!";
let result = str1 + str2; // combines two strings together
console.log(result);


// type operators; to determine the type of an operand
console.log("Type Operators:")

let obj = {};
console.log(typeof obj); // typeof: returns the data type of an operand

function Car() {} // function serves as a constructor for creating 'Car' objects
let myCar = new Car(); // create a new instance of the car object using the 'new' keyword and the 'Car' constructor function
console.log(myCar instanceof Car); // instanceof: checks if an object is an instance of a specific object type