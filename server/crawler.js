const puppeteer = require('puppeteer');



(async () => {

    let url = 'https://www.imdb.com/'
    let movie = 'The Fault in Our Stars'
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle2' })
    await page.type('#suggestion-search', movie)
    await page.waitFor('#react-autowhatever-1--item-0 > a')
    await page.click('#react-autowhatever-1--item-0 > a')
    await page.waitFor('#title-overview-widget > div.vital > div.title_block > div > div.titleBar > div.title_wrapper > h1')
    await page.screenshot({ path: 'screenshot.png' })
    browser.close()
    console.log('See screenshot')
   })()