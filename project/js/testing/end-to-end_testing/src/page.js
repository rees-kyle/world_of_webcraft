let page;

export async function createPage() {
  // import the 'launchBrowser' function from browser.js
  const browser = await import('./browser.js').then(module => module.launchBrowser());
  // create a new page in the browser
  page = await browser.newPage();
  return page;
}

export async function closePage() {
  // check if there is a page open
  if (page) {
    // close the open page
    await page.close();
    page = null; // set page to null after closing
  }
}