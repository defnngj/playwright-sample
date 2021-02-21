const { chromium, webkit, firefox } = require('playwright');

(async () => {
  const browser = await chromium.launch({headless: false, slowMo: 50 });
  // const browser = await webkit.launch();
  // const browser = await firefox.launch();

  const page = await browser.newPage();
  await page.goto('https://www.meituan.com/');
  
  const footer = await page.$('.footer-content')
  await footer.scrollIntoViewIfNeeded({ timeout: 3000 })
  
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();