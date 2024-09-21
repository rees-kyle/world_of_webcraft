// import the 'assert' module for assertions
import assert from 'assert';

// import the 'fetchData' function from the 'api.js' file located in the 'lib' directory
import { fetchData } from '../../lib/api.js';

// define a test suite using mocha's 'describe' function
describe('fetchData function', function() {

  // define a test case using mocha's 'it' function
  it('should return "data" after a delay', async function() {
    // call the 'fetchData' function and wait for the result
    const result = await fetchData();

    // assert that the result is equal to 'data'
    assert.strictEqual(result, 'data');
  });

});