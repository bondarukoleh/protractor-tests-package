"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const helpers_1 = require("../helpers");
class LoginPage {
    constructor() {
        this.loginForm = protractor_1.$('#app .modal');
        this.userName = protractor_1.$('#app input');
        this.userPass = protractor_1.$('#app [type=password]');
        this.loginButton = protractor_1.$('#app [type=button]');
    }
    async login(data) {
        await protractor_1.browser.get('/');
        await protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.loginForm), helpers_1.timeouts.xxl, `Login form should be visible`);
        await this.userName.sendKeys(data.name);
        await this.userPass.sendKeys(data.pass);
        await this.loginButton.click();
    }
    async logout() {
        await protractor_1.browser.get('/');
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=D:/Learn/Protractor-TypeScript/built/pages/login.page.js.map