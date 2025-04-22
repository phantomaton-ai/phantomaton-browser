import puppeteer from 'puppeteer';

import aleister from 'aleister';

import Assistant from './assistant.js';
import Menu from './menu.js';

const menu = aleister(Menu);

export default class Plugin {
  constructor(configuration) {
    this.promise = puppeteer.launch();
  }

  commands() {
    return menu(this.promise).commands;
  }

  assistant(assistant) {
    return new Assistant(this.promise, assistant);
  }
}
