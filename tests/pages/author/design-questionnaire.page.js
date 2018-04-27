const { get } = require('../../utils');

class DesignQuestionnaire {
  static sectionLink() {
    return get('nav-section-link');
  }

  static getQuestionnaireTitle() {
    return get('questionnaire-title');
  }

  static pageLink() {
    return get('page-item');
  }

  static setSectionTitle() {
    return get('txt-section-title', 'data-testid');
  }

  static setQuestionTitle() {
    return get('txt-question-title', 'data-testid');
  }

  static setAnswerTitle() {
    return get('txt-answer-label');
  }

  static getFirstSectionTitle() {
    return "h3[class*='SectionTitle']";
  }

  static clickAddAnswer() {
    return get('btn-add-answer');
  }

  static clickAddPage() {
    return get('btn-add-page');
  }

  static selectTextFieldAnswer() {
    return "button[title='Text']";
  }

  static clickPreview() {
    return get('btn-preview');
  }
}
module.exports = DesignQuestionnaire;
