export default class Menu {
  constructor(promise) {
    this.promise = promise;
  }

  /**
   * Opens a new browser tab.
   * 
   * @param {string} url - The URL to open.
   * @body url
   * @example menu.open('https://lab.phantomaton.com')
   */
  async open(url) {
    const browser = await this.promise;
    const page = await browser.newPage();
    await page.goto(url);
  }

  /**
   * Closes a browser tab.
   * 
   * @param {string} tab - The zero-based index of the tab.
   * @example menu.close('1')
   */
  async close(tab) {
    const browser = await this.promise;
    const pages = await browser.pages();
    await pages[tab].close();
  }


  /**
   * Navigates a browser tab to a new URL.
   * 
   * @param {string} tab - The zero-based index of the tab.
   * @param {string} url - The URL to open.
   * @body url
   * @example menu.navigate('0', 'https://lab.phantomaton.com/studio')
   */
  async navigate(tab, url) {
    const browser = await this.promise;
    const pages = await browser.pages();
    await pages[tab].goto(url);
  }

  /**
   * Click on an element on the tab, identified by the provided selector.
   * 
   * @param {string} tab - The zero-based index of the tab.
   * @param {string} selector - The selector identifying an element to click.
   * @example menu.click('13', 'button#create')
   */
  async click(tab, selector) {
    const browser = await this.promise;
    const pages = await browser.pages();
    await pages[tab].click(selector);
  }

  /**
   * Hover over an element on the tab, identified by the provided selector.
   * 
   * @param {string} tab - The zero-based index of the tab.
   * @param {string} selector - The selector identifying an element to hover over.
   * @example menu.hover('13', 'button#create .info-icon')
   */
  async hover(tab, selector) {
    const browser = await this.promise;
    const pages = await browser.pages();
    await pages[tab].hover(selector);
  }

  /**
   * Type text into element on the tab, identified by the provided selector.
   * 
   * @param {string} tab - The zero-based index of the tab.
   * @param {string} selector - The selector identifying an element to type text into.
   * @param {string} text - The text to type.
   * @body text
   * @example menu.type('4', '#comment-text', 'Great idea! I love it!')
   */
  async type(tab, selector, text) {
    const browser = await this.promise;
    const pages = await browser.pages();
    await pages[tab].type(selector, body.trim());
  }
}
