export default class Menu {
  constructor(browser) {
    this.browser = browser;
  }

  /**
   * Opens a new browser page.
   * 
   * @param {string} url - The URL to open.
   * @example menu.open('https://lab.phantomaton.com')
   */
  async open(url) {
    const page = await browser.newPage();
    await page.goto(url);
  }

  /**
   * Closes a browser page.
   * 
   * @param {string} page - The zero-based index of the page.
   * @example menu.close('1')
   */
  async close(page) {
    const pages = await browser.pages();
    await pages[page].close();
  }


  /**
   * Navigates a browser page to a new URL.
   * 
   * @param {string} page - The zero-based index of the page.
   * @param {string} url - The URL to open.
   * @example menu.navigate('0', 'https://lab.phantomaton.com/studio')
   */
  async navigate(page, url) {
    const pages = await browser.pages();
    await pages[page].goto(url);
  }

  /**
   * Click on an element on the page, identified by the provided selector.
   * 
   * @param {string} page - The zero-based index of the page.
   * @param {string} selector - The selector identifying an element to click.
   * @example menu.click('13', 'button#create')
   */
  async click(page, selector) {
    const pages = await browser.pages();
    await pages[page].click(selector);
  }

  /**
   * Hover over an element on the page, identified by the provided selector.
   * 
   * @param {string} page - The zero-based index of the page.
   * @param {string} selector - The selector identifying an element to hover over.
   * @example menu.hover('13', 'button#create .info-icon')
   */
  async hover(page, selector) {
    const pages = await browser.pages();
    await pages[page].hover(selector);
  }

  /**
   * Type text into element on the page, identified by the provided selector.
   * 
   * @param {string} page - The zero-based index of the page.
   * @param {string} selector - The selector identifying an element to type text into.
   * @param {string} text - The text to type.
   * @body text
   * @example menu.type('4', '#comment-text', 'Great idea! I love it!')
   */
  async type(page, selector, text) {
    const pages = await browser.pages();
    await pages[page].type(selector, body.trim());
  }
}
