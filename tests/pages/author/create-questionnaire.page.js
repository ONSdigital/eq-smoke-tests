class CreateQuestionnaire {
  static questionnaireTitle() {
    return '[data-test="txt-questionnaire-title"]';
  }

  static navigationToggle() {
    return "label[for='navigation']";
  }

  static createButton() {
    return 'button[type="submit"]';
  }
}
module.exports = CreateQuestionnaire;
