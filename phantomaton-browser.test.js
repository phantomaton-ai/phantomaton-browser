import { expect, stub } from 'lovecraft';

import phantomaton from 'phantomaton';
import conversations from 'phantomaton-conversations';
import plugins from 'phantomaton-plugins';
import puppeteer from 'puppeteer';
import browser from './phantomaton-browser.js';

const mockPage = () => ({
  click: stub().resolves(undefined),
  close: stub().resolves(undefined),
  goto: stub().resolves(undefined),
  hover: stub().resolves(undefined),
  type: stub().resolves(undefined)
});

describe('Phantomaton Browser', () => {
  let mockConverse;
  let mockPages;
  let mockNewPage;
  let assistant;

  beforeEach(async () => {
    mockConverse = stub().resolves('Okay...');
    mockPages = [mockPage(), mockPage()];
    mockNewPage = mockPage();
    stub(puppeteer, 'launch').resolves({
      newPage: stub().resolves(mockNewPage),
      pages: stub().resolves(mockPages)
    });
    assistant = await phantomaton('Testing', { install: [
      'phantomaton-conversations',
      'phantomaton-execution',
      browser({}),
      plugins.create([
        plugins.define(conversations.assistant).as({
          converse: mockConverse
        }),
        plugins.define(plugins.start).with([
          conversations.assistant
        ]).as((assistant) => () => assistant)
      ])({})
    ] });
  });

  afterEach(() => {
    puppeteer.launch.restore();
  });

  it('launches puppeteer', () => {
    expect(puppeteer.launch.calledOnce).to.eq(true);
  });
});
