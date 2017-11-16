const AuthorHome = require('./pages/author-home.page');
const CreateQuestionnairePage = require('./pages/create-questionnaire.page');
const DesignQuestionnairePage = require('./pages/design-questionnaire.page');

function createQuestionnaire(title, description, theme, legalBasis) {
  return browser.url('/')
    .click(AuthorHome.createQuestionnaireButton())
    .setValue(CreateQuestionnairePage.questionnaireTitle(), title)
    .setValue(CreateQuestionnairePage.questionnaireDescription(), description)
    .selectByVisibleText(CreateQuestionnairePage.questionnaireTheme(), theme)
    .selectByVisibleText(CreateQuestionnairePage.questionnaireLegalBasis(), legalBasis)
    .click(CreateQuestionnairePage.navigationToggle())
    .click(CreateQuestionnairePage.createButton())
    .waitForExist(DesignQuestionnairePage.setSectionTitle())
    .getText(DesignQuestionnairePage.getBreadCrumb()).should.eventually.contain(title);
}

module.exports = {
  createQuestionnaire,
};
