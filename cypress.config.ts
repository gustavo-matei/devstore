import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://192.168.16.119:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
