module.exports = {
  path: "tests/spec",
  log: "debug",
  sync: false,
  debug: true,

  chai: true,
  mocha: true,

  webdriverio: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    waitforTimeout: 5000,
    waitforInterval: 200,
    bail: 1,
    desiredCapabilities: {
      browserName: "chrome",
      javascriptEnabled: true,
      maxInstances: 1,
      loggingPrefs: {
        browser: "ALL",
        driver: "ALL",
        server: "ALL"
      },
      chromeOptions: {
        args: [
          process.env.HEADLESS ? "--headless" : "--start-maximized",
          "--disable-gpu",
          "--window-size=1920,1080",
          "--no-sandbox",
          "--disable-extensions"
        ]
      },
    }
  },
  seleniumStandaloneOptions: {
    drivers: {
      chrome: {
        version: "2.37"
      }
    }
  }
};