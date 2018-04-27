const { get } = require('../../utils');

class AuthorHome {
  static createQuestionnaireButton() {
    return get('create-questionnaire');
  }

  static createQuestionnaireForm() {
    return get('questionnaire-settings-modal', 'data-testid');
  }
}
module.exports = AuthorHome;
