export default class Assistant {
  constructor(promise, assistant) {
    this.promise = promise;
    this.assistant = assistant;
  }

  async converse(turns, message) {
    const browser = await this.promise;
    const pages = await browser.pages();
    const views = await Promise.all(pages.map(async (page, index) => {
      const index = `${index}`;
      const content = await page.content();
      const url = page.url();
      const header = `[[[BEGIN BROWSER TAB ${index}: ${url}]]]`;
      const footer = `[[[END BROWSER TAB ${index}: ${url}]]]`;
      return [header, content, footer].join('\n');
    }));
    return this.assistant.converse(
      turns,
      [...views, message].join('\n\n---\n\n')
    );
  }
}