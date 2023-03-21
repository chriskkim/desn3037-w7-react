import puppeteer from "puppeteer";
jest.setTimeout(10000);

test("contains the welcome text", async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3000');
    
    const searchResultSelector = "a[href='/list']";
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);
    await page.type('.MuiInputBase-input', 'automate beyond recorder');
    const text = await page.content();
    expect(text).toContain("automate beyond recorder");
    await browser.close();

});    

