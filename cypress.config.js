const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  chromeWebSecurity: false,
  e2e: {
    baseUrl:'https://letcode.in/test',
    setupNodeEvents(on, config) {
   
    },
  },
});
