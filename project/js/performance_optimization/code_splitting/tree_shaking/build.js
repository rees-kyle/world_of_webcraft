// build.js

// import the 'ESBuild' library to use its build function
const esbuild = require('esbuild');

// run the build process with the specified options:
esbuild.build({
  entryPoints: ['src/index.js'], // entry point of the application
  bundle: true,                  // bundle all imported modules into a single file
  minify: true,                  // minify the output to reduce the file size
  outfile: 'dist/bundle.js',     // output file location
  format: 'esm',                 // use ES module format for the output
  treeShaking: true,             // enable tree shaking to remove unused code
}).catch(() => process.exit(1));  // exit the process with an error code if the build fails