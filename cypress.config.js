const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://avenue.us/",
    chromeWebSecurity: false,
    pageLoadTimeout: 300000,
    env: { hideXhr: true },
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
});
