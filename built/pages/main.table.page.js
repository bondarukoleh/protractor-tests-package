"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const timeouts_1 = require("../helpers/timeouts");
class MainTablePage {
    constructor() {
        this.mainTableRoot = protractor_1.$('table.table.text-center');
        this.mainTableHeaders = protractor_1.$$('table[class="table-bordered text-center"] tr[class=success] td');
        this.mainTableRows = protractor_1.$$('table[class="table text-center"] tr');
    }
    async getMainTable() {
        await protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(this.mainTableRoot), timeouts_1.timeouts.xxl, `Table form should be visible`);
        const headersData = await this.mainTableHeaders.map(async (header) => await header.getText());
        const tableData = await this.mainTableRows.map(async (row) => {
            const rowData = await row.$$('td').map(async (data) => await data.getText());
            const rowToReturn = {};
            for (const [i, headerData] of headersData.entries()) {
                rowToReturn[headerData] = rowData[i];
            }
            return rowToReturn;
        });
        return tableData;
    }
}
exports.MainTablePage = MainTablePage;
//# sourceMappingURL=D:/Learn/Protractor-TypeScript/built/pages/main.table.page.js.map