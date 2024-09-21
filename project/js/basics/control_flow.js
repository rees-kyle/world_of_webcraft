// sequential execution (default); line by line, from top to bottom
console.log("Sequential Execution:");

let x = 5;
let y = 10;
let z = x + y;

console.log(z);


// conditional statements ("if statements"); execute based on conditions
console.log("conditional statements (if statements):");

let hour = 15;

if (hour < 12) { // checing if hour is less than 12
    console.log("Good morning!");
} else if (hour < 18) { // if not, check if hour is less than 18
    console.log("Good afternoon!");
} else { // if none of the conditions are met
    console.log("Good evening!");
}


// switch statement
console.log("Switch Statement:");

let day = 3;
let dayName;

switch (day) { // switching based on the value of day
    case 1: // if day is 1...
        dayName = "Monday"; // set 'dayName' to "Monday"
        break; // exit the switch statement
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
    default: // optional; handle unexpected values if none of the cases match
        dayName = "Unknown";
        break;
}

console.log(dayName);


// loops; to repeatedly execute code until a condition is met
console.log("Loops:");
// for loop
console.log("for:");

for (let i = 0; i < 5; i++) { // initialize 'i' to 0; loop until 'i' is less than 5; increment 'i' by 1 in each iteration
    console.log(i); // output the current value of 'i'
}


// while loop
console.log("while:");

let count = 0; // initialize count to 0

while (count < 5) { // loop until 'count' is less than 5
    console.log(count); // output the current value of 'count'
    count++; // increment 'count' by 1
}


// do...while
console.log("do...while:");

let q = 0;

do { // execute the block of code atleast once
    console.log(q);
    q++; // increment 'q' by 1
} while (q < 5); // continue looping as long as 'q' is less than 5


// break and continue
console.log("Break and Continue:")
console.log("Break:")

for (let t = 0; t < 10; t++) { // loop from 0 to 9
    if (t === 5) { // if 't' equals 5
        break; // exit the loop
    }
    console.log(t);
}

console.log("Continue:")

for (let t = 0; t < 10; t++) {
    if (t === 5) {
        continue; // skip the rest of the loop and continue with the next iteration
    }
    console.log(t);
}