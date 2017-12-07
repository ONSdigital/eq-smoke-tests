class CreateQuestionnaire {
  static questionnaireTitle() {
    return '#title';
  }

  static questionnaireDescription() {
    return '#description';
  }

  static questionnaireTheme() {
    return '#theme';
  }

  static questionnaireLegalBasis() {
    return '#legalBasis';
  }

  static navigationToggle() {
    return "label[for='navigation']";
  }

  static navigationCheckbox() {
    return '#navigation';
  }

  static createButton() {
    return 'button[type="submit"]';
  }
}
module.exports = CreateQuestionnaire;
