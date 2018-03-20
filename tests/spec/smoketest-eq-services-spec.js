const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

const AuthorHelpers = require('../author-helpers');
const DesignQuestionnairePage = require('../pages/author/design-questionnaire.page');
const DesignQuestionnaireNavigationPage = require('../pages/author/design-questionnaire-navigation.page');
const QuestionnairePage = require('../pages/runner/questionnaire.page');
const ThankYouPage = require('../pages/runner/thank-you.page');

describe('eQ Services Smoke Test', () => {
  it('should update navigation title when section title changed', async () => {
    await AuthorHelpers.start();
    await AuthorHelpers.signIn();
    await AuthorHelpers.createQuestionnaire('Smoke Test title', 'smoke test description', 'default', 'StatisticsOfTradeAct');

    // Adds section title
    await browser
      .setValue(DesignQuestionnairePage.setSectionTitle(), 'eQ Services Smoke Test');

    // Adds first question
    await browser.setValue(DesignQuestionnairePage.setQuestionTitle(), 'Test Question 1')
      .click(DesignQuestionnairePage.clickAddAnswer())
      .pause(500)
      .click(DesignQuestionnairePage.selectTextFieldAnswer())
      .pause(500)
      .waitForExist(DesignQuestionnairePage.setAnswerTitle())
      .setValue(DesignQuestionnairePage.setAnswerTitle(), 'Test Answer 1');

    // Adds second Question
    await browser
      .click(DesignQuestionnairePage.clickAddPage())
      .waitForExist(DesignQuestionnaireNavigationPage.page(2))
      .setValue(DesignQuestionnairePage.setQuestionTitle(), 'Test Question 2')
      .click(DesignQuestionnairePage.clickAddAnswer())
      .pause(500)
      .click(DesignQuestionnairePage.selectTextFieldAnswer())
      .pause(500)
      .waitForExist(DesignQuestionnairePage.setAnswerTitle())
      .setValue(DesignQuestionnairePage.setAnswerTitle(), 'Test Answer 2');


    // Preview and verifies the newly created questionnaire
    await browser
      .click(DesignQuestionnairePage.clickPreview())
      .getTabIds()
      .then(tabIds => browser.switchTab(tabIds[1]))
      .getTitle().should.eventually.equal('Test Question 1 - Smoke Test title')
      .getText(QuestionnairePage.getBlockTitle()).should.eventually.equal('eQ Services Smoke Test');

    // Edits the title and previews the survey again to assert
    // the edited title and confirm that we are not caching data
    await browser
      .getTabIds()
      .then(tabIds => browser.switchTab(tabIds[0]))
      .setValue(DesignQuestionnairePage.setSectionTitle(), ' - Edited')
      .click(DesignQuestionnairePage.clickPreview())
      .getTabIds()
      .then(tabIds => browser.switchTab(tabIds[2]))
      .getText(QuestionnairePage.getBlockTitle()).should.eventually.equal('eQ Services Smoke Test - Edited')

      // Check preview questionnaire can be submitted
      .click(QuestionnairePage.clickContinue())
      .click(QuestionnairePage.clickContinue())
      .getText(QuestionnairePage.getBlockTitle()).should.eventually.equal('You are now ready to submit this survey')
      .click(QuestionnairePage.clickContinue())
      .getText(ThankYouPage.getHeading()).should.eventually.equal('Submission successful');
  });
});
