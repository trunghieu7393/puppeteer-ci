import puppeteer from 'puppeteer'

export const page = async () => {
  const browser = await puppeteer.launch();
  return page = browser.newPage();
}