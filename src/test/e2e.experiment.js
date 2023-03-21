    const puppeteer = require('puppeteer');

    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('http://localhost:3000');

        // Set screen size
        await page.setViewport({ width: 1080, height: 1024 });

        // Type into search box

        const searchResultSelector = "a[href='/list']";
        await page.waitForSelector(searchResultSelector);
        await page.click(searchResultSelector);

        await page.type('.MuiInputBase-input', 'automate beyond recorder');

        // Locate the full title with a unique string
        //   const textSelector = await page.waitForSelector(
        //     'text/Customize and automate'
        //   );
        const fullTitle = await page.content();
        const screenshot = await page.screenshot({
            path: "./test.jpg",
            type: "jpeg"
        });

        // Print the full title

        await browser.close();
        return fullTitle;

    })();

