"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argsParser = require("minimist");
const ENV_ARGS = argsParser(process.argv.slice(2));
console.log('ENV_ARGS AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
console.log(ENV_ARGS);
const testWithArgs = function () {
    const seleniumAddress = process.env.PROTRACTOR_HUB || 'http://localhost:4444/wd/hub';
    const baseUrl = ENV_ARGS.run_url || 'http://localhost:6666/';
    return {
        seleniumAddress,
        baseUrl
    };
};
exports.testWithArgs = testWithArgs;
//# sourceMappingURL=D:/Learn/Protractor-TypeScript/built/helpers/testWithArgs.js.map