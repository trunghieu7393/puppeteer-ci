import puppeteer from 'puppeteer'
// import { page } from './init';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/emoji-search')
  
  // await page.setViewport({ width: 1440, height: 798 })
  
  await page.waitForSelector('#root > div > .component-search-input > div > input')
  await page.click('#root > div > .component-search-input > div > input')
  
  await page.type('#root > div > .component-search-input > div > input', 'smile')
  
  await page.waitForSelector('#root > div > .component-search-input > div > input')
  await page.click('#root > div > .component-search-input > div > input')
  
  await page.waitForSelector('body > #root > div > .component-emoji-results > .component-emoji-result-row:nth-child(6)')
  await page.click('body > #root > div > .component-emoji-results > .component-emoji-result-row:nth-child(6)')
  
  await browser.close()
})();