// tree shaking; to eliminate dead code from bundles, reducing bundle size and improving performance

/* 
1. initialize a node.js project; 'npm init -y' in bash
2. install ESBuild (bundler and minifier); 'npm install esbuild --save-dev' in bash
3. create project files
4. add module type to 'package.json'
5. create build script in root directory and add it to 'package.json'
6. build the project; 'npm run build' in bash (generates 'dist/bundle.js')
*/

/* 
summary:

tree shaking occurs duringt the build process managed by ESBuild, the key moments are:
- selective importing in the src files
- build process (ESBuild); uses the import information to determine what code is "reachable", it then removes the unreachable code ('unusedFunction' in this example) when generating the final bundle
*/