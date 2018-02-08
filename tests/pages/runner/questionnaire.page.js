class Questionnaire {
  static getBlockTitle() {
    return "p[data-qa='block-title']";
  }

  static clickContinue() {
    return "[data-qa='btn-submit']";
  }
}
module.exports = Questionnaire;
