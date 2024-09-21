// modules:
// - help in managing and encapsulting code in a maintainable and reusable way
// - to split up code into separate files while still sharing code between them
// - each module can contain variables, functions, classes, or any other code construct and expose them to other modules as needed

// benefits:
// - encapsulation; each module can have its private variables and functions that aren't accessible from other modules unless explicitly exported
// - reusability; across different parts of your application without rewriting code
// - maintainability; help in organizing code logically and smaller, module-based codebases are easier to maintain than large scripts
// - namespace management; helps avoid global namespace pollution, reducing the chances of variable name clashes
// - lazy loading; can be loaded dynamically and lazily, which can improve the startup time of applications


// exporting module features; export functions, variables, classes or any other valid javascript expression from a module

// the '.mjs' extension is used to distinguish javascript files that use the ES module syntax ('import' and 'export' statements) from those that use commonjs syntax ('require' and 'module.exports')

// examples:

export const name = 'ChatGPT';

export function greet() {
  console.log('Hello from a module!');
}

export default class {
  constructor(message) {
    this.message = message;
  }
  greet() {
    console.log(this.message);
  }
}


// modules are the standard way to organize code in the real-world; for example you might have a module for each component and another for utility functions, when using a framework like 'react'

// modules promote better coding practices and application structure, enhancing code quality, scalability and performance