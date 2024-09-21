import puppeteer from 'puppeteer';

let browser;

export async function launchBrowser() {
  // check if browser is not already running
  if (!browser) {
    // launch a new browser instance in headless mode
    browser = await puppeteer.launch({ headless: true });
  }
  return browser;
}

export async function closeBrowser() {
  // check if browser is currently running
  if (browser) {
    // close the browser instance
    await browser.close();
    browser = null; // set browser to null after closing
  }
}