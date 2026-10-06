const { chromium } = require('/Users/davidkim/.npm/_npx/9833c18b2d85bc59/node_modules/playwright-core');
(async () => {
  const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage({ viewport: { width: 600, height: 800 }, deviceScaleFactor: 2 });
  await p.goto('file://' + __dirname + '/header.html', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.locator('.card').screenshot({ path: 'header@2x.png' });
  await b.close();
})();
