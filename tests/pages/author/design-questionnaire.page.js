class DesignQuestionnaire {
  static setSectionTitle() {
    return "[data-testid='txt-section-title']";
  }

  static setQuestionTitle() {
    return "[data-testid='txt-question-title']";
  }

  static setAnswerTitle() {
    return "[data-test='txt-answer-label']";
  }

  static getFirstSectionTitle() {
    return "h3[class*='SectionTitle']";
  }

  static clickAddAnswer() {
    return "[data-test='btn-add-answer']";
  }

  static clickAddPage() {
    return "[data-test='btn-add-page']";
  }

  static selectTextFieldAnswer() {
    return "button[title='Text']";
  }

  static getBreadCrumb() {
    return "[data-test='breadcrumb']";
  }

  static clickPreview() {
    return "a[class*='IconLink']";
  }
}
module.exports = DesignQuestionnaire;
