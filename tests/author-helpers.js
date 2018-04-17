const AuthorHome = require('./pages/author/author-home.page');
const CreateQuestionnairePage = require('./pages/author/create-questionnaire.page');

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
    .click(CreateQuestionnairePage.createButton());
}

module.exports = {
  createQuestionnaire,
  signIn,
  start,
};
