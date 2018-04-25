class AuthorHome {
  static createQuestionnaireButton() {
    return '[data-test="create-questionnaire"]';
  }

  static createQuestionnaireForm() {
    browser.debug();
    return '[data-testid="questionnaire-settings-modal"]';
  }
}
module.exports = AuthorHome;
