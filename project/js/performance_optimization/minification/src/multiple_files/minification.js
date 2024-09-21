// minification:
// - the process of removing unnecessary characters from the source code without changing its functionality
// - these unnecessary characters include white spaces, line breaks, comments, and sometimes even shortening variable names
// - the purpose is to reduce the size of files, which results in faster loading times and improved performance

// tools:
// - UglifyJS: one of the most widely used for javascript minification
// - Terser: a modern javascript minifier, which is a fork of UglifyJS and provides better support for ES6+
// - Google Closure Compiler: offers advanced optimizations but can be more complex to configure
// - Babel Minify: integrated with Babel, useful if you're already using Babel for transpilation


// examples using Terser:

// first, initialize a node project; 'npm init -y' in bash
// second, install Terser as a development dependency; 'npm install terser --save-dev' in bash

// to minify a single file; 'npx terser input.js -o output.min.js' in bash 

// to minify multiple files using a node.js script:


const { minify } = require("terser"); // import the minify function from the Terser package
const fs = require("fs"); // import the file system module from node.js
const files = ["src/multiple_files/file_1.js", "src/multiple_files/file_2.js", "src/multiple_files/file_3.js"]; // array of javascript files to be minified

// iterate over each file
files.forEach(file => {
    // read the contents of the file
    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            // log an error message if the file cannot be read
            console.error(`Error reading file: ${file}`, err);
            return;
        }
        // minify the file contents
        minify(data).then(minified => {
            // generate the minified file name by replacing '.js' with 'min.js'
            const minFileName = file.replace(".js", ".min.js");
            // write the minified code to the new file
            fs.writeFile(minFileName, minified.code, err => {
                if (err) {
                    // log an error message if the file cannot be written
                    console.error(`Error writing file: ${minFileName}`, err);
                } else {
                    // log a success message
                    console.log(`File minified: ${minFileName}`);
                }
            });
        }).catch(console.error); // handle any errors during minification
    });
});


// run the script; 'node src/multiple_files/minification.js' in bash


// other considerations:
// - source maps; to facilitate debugging of minified files (generate source maps by passing the appropriate options to the minifier)
// - automation; integrate minification into your CI/CD pipeline to ensure all code is minified before deployment

// conclusion: 
// - use minification to improve the performance of applications by reducing file size and load times 
// - using tools and integrating with build systems can automate this process