const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://avenue.us/",
    chromeWebSecurity: false,
    pageLoadTimeout: 100000,
  },
});
