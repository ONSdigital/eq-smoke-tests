import { get } from '../../utils';

class CreateQuestionnaire {
  static questionnaireTitle() {
    return get('txt-questionnaire-title');
  }

  static navigationToggle() {
    return "label[for='navigation']";
  }

  static createButton() {
    return 'button[type="submit"]';
  }
}
module.exports = CreateQuestionnaire;
