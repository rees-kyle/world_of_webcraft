// array of numbers
const numbers = [1, 2, 3, 4, 5];

// function to sum the elements of an array
function sumArray(arr) {
    // return the sum of the array elements
    return arr.reduce((acc, num) => acc + num, 0);
}

// output the sum of the array to the console
console.log("Sum of array:", sumArray(numbers));