function testId(selector, attribute = 'data-test') {
  return `[${attribute}="${selector}"]`;
}

module.exports = {
  testId,
};
