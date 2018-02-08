class DesignQuestionnaireNavigation {
  static page(number) {
    return `li[class^='PageNav__StyledPageItem']:nth-child(${number})`;
  }
}
module.exports = DesignQuestionnaireNavigation;
