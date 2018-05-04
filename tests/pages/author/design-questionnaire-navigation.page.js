class DesignQuestionnaireNavigation {
  static page(number) {
    return `li[data-test='page-item']:nth-child(${number})`;
  }
}
module.exports = DesignQuestionnaireNavigation;
