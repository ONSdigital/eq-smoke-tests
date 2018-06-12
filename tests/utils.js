const fs = require('fs');
const path = require('path');

function testId(selector, attribute = 'data-test') {
  return `[${attribute}="${selector}"]`;
}

async function saveScreenshot(filename, directory = './.screenshots') {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  const screenshot = await browser.saveScreenshot();
  fs.writeFileSync(path.join(directory, filename), screenshot);
}

module.exports = {
  testId,
  saveScreenshot,
};
