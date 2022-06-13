require('dotenv').config({ path: './e2e/src/.env' });

const envUrl = require('./config/env-urls');
const appEnv = (process.env.APP_ENV) ? process.env.APP_ENV : 'test';
const siteUrls = envUrl.getEnvironmentUrls(appEnv);

const seleniumConfig = {
  drivers: { chrome: { version: '102.0.5005.27' } },
};

exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
  // then the current working directory is where your `package.json` resides, so `wdio`
  // will be called from there.
  //
  runner: 'local',
  specs: [
    './e2e/src/tests/**/*.e2e.ts'
  ],
  suites: {
  },
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 10,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [{

    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 10,
    //
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: [
        '--headless',
        '--disable-gpu',
        '--disable-logging',
        '--disable-back-forward-cache',
        '--disable-cookie-encryption',
        '--disable-gpu-program-cache',
        '--window-size=1280,1024'
      ],
    }
    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
  }],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'error',
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/appium-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: siteUrls.portalUrl,
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 30000,
  waitforInterval: 2000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 40000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: [
    ['selenium-standalone', {
      logPath: 'logs',
      installArgs: seleniumConfig, // drivers to install
      args: seleniumConfig
    }]
  ],

  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'jasmine',
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: [
    'spec',
    ['junit', {
      outputDir: './e2e/src/junit',
      outputFileFormat: function (options) {
        return `results-${options.capabilities.browserName}-${appEnv}-${options.cid}.xml`;
      }
    }]
  ],
  //
  // Options to be passed to Jasmine.
  jasmineOpts: {
    // Jasmine default timeout
    defaultTimeoutInterval: 60000,
    requires: ['tsconfig-paths/register'],
    //
    // The Jasmine framework allows interception of each assertion in order to log the state of the application
    // or website depending on the result. For example, it is pretty handy to take a screenshot every time
    // an assertion fails.
    expectationResultHandler: function (passed, assertion) {
      // do something
    }
  },
  // autoCompileOpts: {
  //   //
  //   // To disable auto-loading entirely set this to false.
  //   autoCompile: true, // <boolean> Disable this to turn off autoloading. Note: When disabling, you will need to handle calling any such libraries yourself.
  //   //
  //   // If you have ts-node installed, you can customize how options are passed to it here:
  //   // Any valid ts-node config option is allowed. Alternatively the ENV Vars could also be used instead of this.
  //   // See also: https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
  //   // See also RegisterOptions in https://github.com/TypeStrong/ts-node/blob/master/src/index.ts
  //   // tsNodeOpts: {
  //   //   transpileOnly: true,
  //   //   project: 'tsconfig.json'
  //   // },
  //   // If you have tsconfig-paths installed and provide a tsConfigPathsOpts
  //   // option, it will be automatically registered during bootstrap.
  //   // tsConfigPathsOpts: {
  //   //   baseUrl: './'
  //   // }
  // },
  before: function (capabilities, specs, browser) {
    require('tsconfig-paths/register');
    // resetting the browser window size to make sure the viewport is the same
    // so that the images we are comparing matches wether we are running the tests
    // in either headless mode or not.
    const viewportDiff = browser.execute(
      'return ({width: window.outerWidth - window.innerWidth, height: window.outerHeight - window.innerHeight});'
    );
    const newWidth = 1280 + viewportDiff.width;
    const newHeight = 1024 + viewportDiff.height;
    browser.setWindowRect(null, null, newWidth, newHeight);
  }
}
