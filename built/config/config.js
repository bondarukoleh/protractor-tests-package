"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
const AllureReporter = require("jasmine-allure-reporter");
exports.config = {
    framework: 'jasmine2',
    onPrepare: async () => {
        await protractor_1.browser.waitForAngularEnabled(false);
        await protractor_1.browser.manage().window().maximize();
        protractor_1.browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultDir: `./allure-results`
            }
        }));
        jasmine.getEnv().afterEach(async () => {
            const png = await protractor_1.browser.takeScreenshot();
            allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64');
            }, 'image/png')();
        });
    },
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 120000
    }
};
//# sourceMappingURL=D:/Learn/Protractor-TypeScript/built/config/config.js.map