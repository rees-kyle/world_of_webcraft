// end-to-end (E2E) testing: 
// - to check if a web application works correctly from the user's perspective,
// - by simulating real-world interactions with the app

// 1. initialize project; run 'npm init -y' in bash ('-y' flag autogenerates a default 'package.json' file)
// 2. install puppeteer; 'npm install puppeteer' in bash
// 3. install dependencies (mocha and chai); 'npm install --save-dev mocha chai' in bash
// 4. set up configuration in 'package.json'; for tests and modules
// 5. create and test

import { createPage, closePage } from '../src/page.js';
import { closeBrowser } from '../src/browser.js';
import { expect } from 'chai'; // chai for assertions

describe('Example Domain', function() {
  let page;

  before(async function() {
    page = await createPage(); // initialize the page
  });

  after(async function() {
    await closePage(); // close the page
    await closeBrowser(); // close the browser
  });

  it('should have the correct title', async function() {
    await page.goto('https://example.com'); // navigate to the example.com page
    const title = await page.title(); // get the page title
    expect(title).to.equal('Example Domain'); // check if the title is 'Example Domain'
  });
});
