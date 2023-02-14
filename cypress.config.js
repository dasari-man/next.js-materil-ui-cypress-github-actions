const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalWebKitSupport: true,
  projectId: 'ys87qm',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
