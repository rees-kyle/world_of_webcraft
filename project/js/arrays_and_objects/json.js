// parsing json; to parse a json string and convert it into a javascript object
console.log("Parsing JSON:");

let jsonString = '{"name": "Kyle", "age": 28}';

let jsonObject = JSON.parse(jsonString); // parsing method
console.log(jsonObject.name);
console.log(jsonObject.age);

// converting to json; to convert a javascript object into a json string
console.log("Converting to JSON:");

let person = { name: "John", age: 30 };
let jsonString2 = JSON.stringify(person);
console.log(jsonString2);

// json: 
// - supports various data types
// - commonly used for exchanging data between a web server and a web client,
//   as well as for configuration files and storing data locally in web applications.
// - anything written in JSON can be used directly in javascript,
//   but not everything written in javascript can be used in json.

// restrictions:
// - functions
// - undefined values (variables that has been declared but not given values)