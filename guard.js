const guard = command => ({
  ...command,
  async execute(...args) {
    try {
      return await command.execute(...args);
    } catch (e) {
      return `ERROR: ${e.message}`;
    }
  }
});

export default guard;

