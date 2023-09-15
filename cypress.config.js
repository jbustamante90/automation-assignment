const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://www.youngliving.com/us/en",
    watchForFileChanges: false,
    chromeWebSecurity: false,
  },
});
