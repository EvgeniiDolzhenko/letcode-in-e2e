const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  e2e: {
    baseUrl:'https://letcode.in/test',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
