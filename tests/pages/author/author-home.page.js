const { testId } = require('../../utils');

class AuthorHome {
  static createQuestionnaireButton() {
    return testId('create-questionnaire');
  }

  static createQuestionnaireForm() {
    return testId('questionnaire-settings-modal', 'data-testid');
  }
}
module.exports = AuthorHome;
