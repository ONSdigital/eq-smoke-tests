class DesignQuestionnaire {
  static setSectionTitle() {
    return "#section-editor [aria-label='title']";
  }

  static setQuestionTitle() {
    return "#question-page-editor [aria-label='Question']";
  }

  static setAnswerTitle() {
    return "#question-page-editor [id='label']";
  }

  static getFirstSectionTitle() {
    return "h3[class*='SectionTitle']";
  }

  static clickAddAnswer() {
    return "button[id='add-answer-button']";
  }

  static clickAddPage() {
    return "#root [id='btn-add-page']";
  }

  static selectTextFieldAnswer() {
    return "button[title='Text']";
  }

  static getBreadCrumb() {
    return "ol[class*='Breadcrumb']";
  }

  static clickPreview() {
    return "a[class*='IconLink']";
  }
}
module.exports = DesignQuestionnaire;
