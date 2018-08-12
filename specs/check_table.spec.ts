import {LoginPage, MainTablePage} from '../pages';

describe('App Testing', () => {
  const loginPage = new LoginPage()
  const mainTablePage = new MainTablePage()

  beforeAll(async() => {
    await loginPage.login({name: 'User', pass: 'Pass'})
  })

  it('Check the main table', async() => {
    const table = await mainTablePage.getMainTable()
    console.log(table) // just to check out how it looks like
    expect(table.length).toBe(79, 'Main table rows count should be 79')
  })

  afterAll(async() => {
    await loginPage.logout()
  })
})
