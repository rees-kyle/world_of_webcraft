// mocking: 
// - a technique used to verify that certain methods or functions are called with expected parameters or interactions
// - often used to ensure that a piece of code interacts correctly with other components or services
// - can be set up to expect certain calls, verify that these calls were made, and check the parameters passed to them

// stubbing: 
// - a technique used to replace a function or method with a controlled implementation that returns predefined values
// - useful for isolating the unit under test from its dependencies,
// - to test the unit's behavior without relying on the actual implementations of those dependencies

// prerequisites:
// - mocha
// - sinon (for mocking and stubbing); 'npm install sinon' in bash
// - chai (an optional but commonly used assertion library); 'npm install chai' in bash

// scenario:
// you want to test that the 'getUserProfile' function correctly returns a user profile when given a user id

import { describe, it, afterEach } from 'mocha'; // import test functions from mocha
import { expect } from 'chai'; // import assertion library chai
import sinon from 'sinon'; // import sinon for stubbing and mocking
import * as userService from '../../lib/userService.js'; // import the 'userService' module

// define a test suite for 'userService'
describe('userService', function() {
  // restore sinon stubs and mocks after each test
  afterEach(function() {
    sinon.restore();
  });

  // define a test suite for 'getUserProfile' function
  describe('getUserProfile', function() {
    // define a test case
    it('should return the correct user profile', async function() {

      // mocking: sinon is used to mock the 'fetchUserData' function, allowing us to control its behavior during the test
      const fetchUserDataStub = sinon.stub() // create a stub for the 'fetchUserData' function

        // stubbing: specifying how the stubbed function 'fetchUserDataStub' should behave
        .withArgs(1) // specify the argument for which the stub should return a value
        .returns(Promise.resolve({ id: 1, name: 'Jane Smith' })); // return a promise that resolves with a user profile object

      // call the 'getUserProfile' function being tested with the stubbed 'fetchUserData'
      const profile = await userService.getUserProfile(1, fetchUserDataStub);

      // assert that the returned profile matches the expected value
      expect(profile).to.equal('User Profile: Jane Smith');
    });
  });
});