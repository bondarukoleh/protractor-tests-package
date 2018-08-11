import {ElementFinder, $, browser, ExpectedConditions as EC} from "protractor";
import {timeouts} from "../helpers";
class LoginPage {
    private loginForm: ElementFinder
    private userName: ElementFinder
    private userPass: ElementFinder
    private loginButton: ElementFinder

    constructor() {
        this.loginForm = $('#app .modal')
        this.userName = $('#app input')
        this.userPass = $('#app [type=password]')
        this.loginButton = $('#app [type=button]')
    }

    public async login(data: {name: string, pass: string}): Promise<void> {
        await browser.get('/')
        await browser.wait(EC.visibilityOf(this.loginForm), timeouts.xxl, `Login form should be visible`)
        await this.userName.sendKeys(data.name)
        await this.userPass.sendKeys(data.pass)
        await this.loginButton.click()
    }

    public async logout(): Promise<void> {
        await browser.get('/')
    }
}

export {LoginPage}
