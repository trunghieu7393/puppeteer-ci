import puppeteer from 'puppeteer'
// import { page } from './init';

(async () => {
  console.log('begin testtttttt');
  
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  console.log('11111111');

  const page = await browser.newPage();
  console.log('22222222');
  
  await page.goto('http://127.0.0.1:3006/emoji-search')
  console.log('33333333');
  
  
  // await page.setViewport({ width: 1440, height: 798 })
  
  await page.waitForSelector('#root > div > .component-search-input > div > input')
  await page.click('#root > div > .component-search-input > div > input')
  
  await page.type('#root > div > .component-search-input > div > input', 'smile')
  
  await page.waitForSelector('#root > div > .component-search-input > div > input')
  await page.click('#root > div > .component-search-input > div > input')
  
  await page.waitForSelector('body > #root > div > .component-emoji-results > .component-emoji-result-row:nth-child(6)')
  await page.click('body > #root > div > .component-emoji-results > .component-emoji-result-row:nth-child(6)')
  
  await browser.close()
  console.log('end testtttttt');
  
})();