import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    password: "Password@123",
    userName: "guestQE",
    userID: "eff779dc-ec9b-4981-9143-2cf2327dd9c7"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    'baseUrl': 'https://demoqa.com',
    'viewportWidth': 1920,
    'viewportHeight': 1080,
    'defaultCommandTimeout': 30000,
    'pageLoadTimeout': 180000,
    'video': false,
    'reporter': 'junit',
    'screenshotsFolder': 'screenshots_out/NEW',
    'videosFolder': 'videos_out/NEW',
    'reporterOptions': {
      'mochaFile': 'test-reports/NEW/test-results.[hash].xml',
      'reportDir': 'test-reports/NEW'
    },
    'requestTimeout': 30000,
    'responseTimeout': 20000,
    specPattern: 'cypress/tests/**/*.spec.{js,jsx,ts,tsx}'
  },
});
