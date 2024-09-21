// import specific, named exports
import { name, greet } from './modules.mjs';
// import the default export
import Greeting from './modules.mjs';
// import everything from the module as an object
import * as MyModule from './modules.mjs';
// import a named export with renaming
import { name as ModuleName } from './modules.mjs';


console.log("Named Export:"); // using specific, named exports

console.log(name);
greet();


console.log("Default Export:"); // using the default export

const greetingInstance = new Greeting('Hello from default export!');
greetingInstance.greet();


console.log("Import Everything:"); // using import everything from the module

console.log(MyModule.name);
MyModule.greet();


console.log("Renamed Import:"); // using renamed import

console.log(ModuleName);