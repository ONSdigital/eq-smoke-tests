const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

const AuthorHelpers = require('../author-helpers');
const DesignQuestionnairePage = require('../pages/design-questionnaire.page');
const DesignQuestionnaireNavigationPage = require('../pages/design-questionnaire-navigation.page');

describe('eQ Services Smoke Test', () => {
  it('should update navigation title when section title changed', () =>
    AuthorHelpers.createQuestionnaire('Smoke Test title', 'smoke test description', 'default', 'StatisticsOfTradeAct')

    // Adds section title
      .setValue(DesignQuestionnairePage.setSectionTitle(), 'eQ Services Smoke Test')

    // Adds first question
      .setValue(DesignQuestionnairePage.setQuestionTitle(), 'Test Question 1')
      .click(DesignQuestionnairePage.clickAddAnswer())
      .click(DesignQuestionnairePage.selectTextFieldAnswer())
      .waitForExist(DesignQuestionnairePage.setAnswerTitle())
      .setValue(DesignQuestionnairePage.setAnswerTitle(), 'Test Answer 1')

    // // Adds second Question
      .click(DesignQuestionnairePage.clickAddPage())
      .waitForExist(DesignQuestionnaireNavigationPage.page(2))
      .setValue(DesignQuestionnairePage.setQuestionTitle(), 'Test Question 2')
      .click(DesignQuestionnairePage.clickAddAnswer())
      .click(DesignQuestionnairePage.selectTextFieldAnswer())
      .waitForExist(DesignQuestionnairePage.setAnswerTitle())
      .setValue(DesignQuestionnairePage.setAnswerTitle(), 'Test Answer 2')

    // Preview and verifies the newly created questionnaire
      .click(DesignQuestionnairePage.clickPreview())
      .getTabIds()
      .then(tabIds => browser.switchTab(tabIds[1]))
      .getTitle().should.eventually.equal('Test Question 1 - Smoke Test title')
      .getText(DesignQuestionnairePage.getBlockTitle()).should.eventually.equal('eQ Services Smoke Test')

    // // Edits the title and previews the survey again to assert
    // // the edited title and confirm that we are not caching data
      .getTabIds()
      .then(tabIds => browser.switchTab(tabIds[0]))
      .setValue(DesignQuestionnairePage.setSectionTitle(), ' - Edited')
      .click(DesignQuestionnairePage.clickPreview())
      .getTabIds()
      .then(tabIds => browser.switchTab(tabIds[2]))
      .getText(DesignQuestionnairePage.getBlockTitle()).should.eventually.equal('eQ Services Smoke Test - Edited'));
});
