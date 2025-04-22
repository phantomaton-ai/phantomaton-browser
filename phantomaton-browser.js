import aleister from 'aleister';
import execution from 'phantomaton-execution';
import plugins from 'phantomaton-plugins';
import Menu from './projects.js';

const menu = aleister(Menu);

export default plugins.create(
  configuration => new Browser(configuration),
  ({ instance }) => [
    plugins.define(execution.commands).as(menu(instance).commands)
  ]
);
