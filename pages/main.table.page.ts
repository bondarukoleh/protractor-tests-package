import {ElementFinder, ElementArrayFinder, $$, browser, ExpectedConditions as EC, $} from 'protractor'
import {timeouts} from '../helpers/timeouts';

class MainTablePage {

  private mainTableRoot: ElementFinder
  private mainTableHeaders: ElementArrayFinder
  private mainTableRows: ElementArrayFinder

  constructor() {
    this.mainTableRoot = $('table.table.text-center')
    this.mainTableHeaders = $$('table[class="table-bordered text-center"] tr[class=success] td')
    this.mainTableRows = $$('table[class="table text-center"] tr')
  }

  public async getMainTable(): Promise<{}[]> {
    await browser.wait(EC.visibilityOf(this.mainTableRoot), timeouts.xxl, `Table form should be visible`)
    const headersData = await this.mainTableHeaders.map(async(header) => await header.getText()) as string[]
    const tableData = await this.mainTableRows.map(async(row) => {
      const rowData = await row.$$('td').map(async(data) => await data.getText()) as string[]
      const rowToReturn = {}
      for (const [i, headerData] of headersData.entries()) {
        rowToReturn[headerData] = rowData[i]
      }
      return rowToReturn
    }) as {}[]
    return tableData
  }
}

export {MainTablePage}