import {browser} from 'protractor'
import {SpecReporter} from 'jasmine-spec-reporter'
import {Configuration} from 'jasmine-spec-reporter/built/configuration'
import * as AllureReporter from 'jasmine-allure-reporter'
declare const allure: any;

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../specs/check_table.spec.ts'],
  baseUrl: 'http://localhost:5555/',
  onPrepare: async() => {
    await browser.waitForAngularEnabled(false)
    await browser.manage().window().maximize()
    browser.ignoreSynchronization = true;

    jasmine.getEnv().addReporter(
        new SpecReporter(<Configuration>{
          spec: {
            displayStacktrace: true
          }
        })
    );
    jasmine.getEnv().addReporter(new AllureReporter({
      allureReport: {
        resultDir: `./allure-results`
      }
    }));
    jasmine.getEnv().afterEach(async() => {
      const png = await browser.takeScreenshot()
      allure.createAttachment('Screenshot', function () {
        return new Buffer(png, 'base64')
      }, 'image/png')();
    })
  },

  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 120000
  }
}