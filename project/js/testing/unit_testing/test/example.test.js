// unit testing; create tests for individual units of code (functions, methods, etc), to ensure they work correctly in isolation before integration
// mocha; testing framework (othe testing frameworks: jest, jasmine)

// 1. initialize project; run 'npm init -y' in bash ('-y' flag autogenerates a default 'package.json' file)
// 2. install mocha; 'npm install --save-dev mocha' in bash
// 3. set up configuration in 'package.json'; for tests and modules
// 4. create and test

// import the built-in 'assert' module from node.js for assertions
import { strict as assert } from 'assert';
// import the functions to be tested from the module
import { add, subtract } from '../lib/calculator.js';

// define a test suite for the 'Calculator' module
describe('Calculator', function() {

  // define a test suite for the 'add' function
  describe('#add()', function() {

    // test case: adding 2 and 3 should return 5
    it('should return 5 when adding 2 and 3', function() {
      // assert that add(2, 3) equals 5
      assert.strictEqual(add(2, 3), 5);
    });

    // test case: adding -2 and 1 should return -1
    it('should return -1 when adding -2 and 1', function() {
      // assert that add(-2, 1) equals -1
      assert.strictEqual(add(-2, 1), -1);
    });
  });

  // define a test suite for the 'subtract' function
  describe('#subtract()', function() {

    // test case: subtracting 2 from 3 should return 1
    it('should return 1 when subtracting 2 from 3', function() {
      // assert that subtract(3, 2) equals 1
      assert.strictEqual(subtract(3, 2), 1);
    });

    // test case: subtracting 2 from -1 should return -3
    it('should return -3 when subtracting 2 from -1', function() {
      // assert that subtract(-1, 2) equals -3
      assert.strictEqual(subtract(-1, 2), -3);
    });
  });
});


// 5. run tests using the test script defined in 'package.json'; 'npm test' in bash


// consider additional libraries for more advanced testing needs