import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  expect: {
    timeout: 5000
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['list'],
    ["allure-playwright"]
  ],

  use: {
    baseURL: 'https://parabank.parasoft.com/parabank/',

    // headless: false,

    // screenshot: 'only-on-failure',

    // video: 'retain-on-failure',

    // trace: 'retain-on-failure',
    trace: 'on',
    screenshot: 'on',
    video : 'on',
    headless : false,
    //used for execution slow
  // launchOptions:{
  //   slowMo:1000
  // }

    actionTimeout: 10000,

    navigationTimeout: 30000
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});