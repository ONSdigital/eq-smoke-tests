const AuthorHome = require('./pages/author/author-home.page');
const CreateQuestionnairePage = require('./pages/author/create-questionnaire.page');
const DesignQuestionnairePage = require('./pages/author/design-questionnaire.page');

function start() {
  return browser.url('/');
}

function signIn() {
  return browser
    .waitForExist('button')
    .click('button')
    .pause(100);
}

function createQuestionnaire(title) {
  return browser
    .click(AuthorHome.createQuestionnaireButton())
    .waitForExist(AuthorHome.createQuestionnaireForm())
    .setValue(CreateQuestionnairePage.questionnaireTitle(), title)
    .click(CreateQuestionnairePage.navigationToggle())
    .click(CreateQuestionnairePage.createButton())
    .waitForExist(DesignQuestionnairePage.setSectionTitle())
    .getText(DesignQuestionnairePage.getBreadCrumb()).should.eventually.contain(title);
}

module.exports = {
  createQuestionnaire,
  signIn,
  start,
};
