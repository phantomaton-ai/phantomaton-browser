import conversations from 'phantomaton-conversations';
import execution from 'phantomaton-execution';
import plugins from 'phantomaton-plugins';

import Plugin from './plugin.js';

export default plugins.create(
  configuration => new Plugin(configuration),
  ({ instance }) => [
    plugins.define(execution.command).as(instance.commands()),
    plugins.decorate(conversations.assistant).as(assistant => instance.assistant(assistant))
  ]
);
