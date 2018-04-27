function get(selector, attribute = 'data-test') {
  return `[${attribute}="${selector}"]`;
}

module.exports = {
  get,
};
