"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pages_1 = require("../pages");
describe('App Testing', () => {
    const loginPage = new pages_1.LoginPage();
    const mainTablePage = new pages_1.MainTablePage();
    beforeAll(async () => {
        await loginPage.login({ name: 'User', pass: 'Pass' });
    });
    it('Check the main table', async () => {
        const table = await mainTablePage.getMainTable();
        console.log(table); // just to check out how it looks like
        expect(table.length).toBe(79, 'Main table rows count should be 79');
    });
    afterAll(async () => {
        await loginPage.logout();
    });
});
//# sourceMappingURL=D:/Learn/Protractor-TypeScript/built/specs/check_table.spec.js.map