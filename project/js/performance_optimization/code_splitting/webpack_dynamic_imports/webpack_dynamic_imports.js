// first initialize project; 'npm init -y' in bash
// second install webpack and webpack CLI; 'npm install --save-dev webpack webpack-cli' in bash
// third, create the files
// fourth, build the project; 'npm run build' in bash (generates bundle.js)
// fifth, ensure the 'http-server' package is installed; to globally install run 'npm install -g http-server' in bash
/* 
'http-server' is a simple, zero-configuration command-line tool that allows you to quickly and easily serve static files over HTTP,
it's particularly useful for testing or serving web projects locally during development
*/ 
// finally serve the 'index.html' file; 'npx http-server ./dist' in bash (this will serve the dist directory at http://localhost:8080 by default)