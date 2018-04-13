class DesignQuestionnaireNavigation {
  static page(number) {
    return `li[class^='PageNavItem__StyledPageItem']:nth-child(${number})`;
  }
}
module.exports = DesignQuestionnaireNavigation;
