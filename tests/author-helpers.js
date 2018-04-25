const AuthorHome = require('./pages/author/author-home.page');
const CreateQuestionnairePage = require('./pages/author/create-questionnaire.page');
const DesignQuestionnaire = require('./pages/author/design-questionnaire.page');

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

function addAnswer(title) {
  return browser
    .click(DesignQuestionnaire.clickAddAnswer())
    .pause(500)
    .click(DesignQuestionnaire.selectTextFieldAnswer())
    .pause(500)
    .waitForExist(DesignQuestionnaire.setAnswerTitle())
    .setValue(DesignQuestionnaire.setAnswerTitle(), title);
}

module.exports = {
  createQuestionnaire,
  signIn,
  start,
  addAnswer
};
