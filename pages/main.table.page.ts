import {ElementFinder, ElementArrayFinder, $$, browser, ExpectedConditions as EC, $} from "protractor";
import {timeouts} from "../helpers/timeouts";
class MainTablePage {

    private mainTableRoot: ElementFinder
    private mainTableHeaders: ElementArrayFinder
    private mainTableRows: ElementArrayFinder

    constructor() {
        this.mainTableRoot = $('table.table.text-center')
        this.mainTableHeaders = $$('table[class="table-bordered text-center"] tr[class=success] td')
        this.mainTableRows = $$('table[class="table text-center"] tr')
    }

    public async getMainTable(): Promise<string[]>{
        await browser.wait(EC.visibilityOf(this.mainTableRoot), timeouts.xxl, `Table form should be visible`)
        const headersData = await this.mainTableHeaders.map(async (header) => await header.getText()) as string[]
        const rowsLength = await this.mainTableRows.count()
        const tableData = []
        for (let i = 0; i < rowsLength; i++) {
            const rowData = await this.mainTableRows.get(i).$$('td').map(async (row) => await row.getText()) as string[]
            const rowToReturn = {}
            for (let j = 0; j < headersData.length; j++) {
                rowToReturn[headersData[j]] = rowData[j]
            }
            tableData.push(rowToReturn)
        }
        return tableData
    }
}

export {MainTablePage}