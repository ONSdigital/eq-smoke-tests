const { testId } = require('../../utils');

class DesignQuestionnaire {
  static sectionLink() {
    return testId('nav-section-link');
  }

  static getQuestionnaireTitle() {
    return testId('questionnaire-title');
  }

  static pageLink() {
    return testId('page-item');
  }

  static setSectionTitle() {
    return testId('txt-section-title', 'data-testid');
  }

  static setQuestionTitle() {
    return testId('txt-question-title', 'data-testid');
  }

  static setAnswerTitle() {
    return testId('txt-answer-label');
  }

  static clickAddAnswer() {
    return testId('btn-add-answer');
  }

  static clickAddPage() {
    return testId('btn-add-page');
  }

  static selectTextFieldAnswer() {
    return "button[title='Text']";
  }

  static clickPreview() {
    return testId('btn-preview');
  }
}
module.exports = DesignQuestionnaire;
