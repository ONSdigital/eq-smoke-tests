const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

const {
  start,
  signIn,
  createQuestionnaire,
  addAnswer,
  addQuestionPage,
} = require('../author-helpers');

const {
  sectionLink,
  getQuestionnaireTitle,
  setQuestionTitle,
  setSectionTitle,
  clickPreview,
} = require('../pages/author/design-questionnaire.page');

const {
  page,
} = require('../pages/author/design-questionnaire-navigation.page');

const {
  getBlockTitle,
  clickContinue,
} = require('../pages/runner/questionnaire.page');

const { getHeading } = require('../pages/runner/thank-you.page');

describe('eQ Services Smoke Test', () => {
  it('should update navigation title when section title changed', async () => {
    const title = 'Smoke Test title';

    await start();
    await signIn();

    await createQuestionnaire(title);

    const questionnaireTitleSelector = getQuestionnaireTitle();
    const questionnaireTitle = await browser
      .waitForExist(questionnaireTitleSelector)
      .getText(questionnaireTitleSelector);

    expect(questionnaireTitle).contain(title);

    // Adds section title
    await browser
      .click(sectionLink())
      .setValue(setSectionTitle(), 'eQ Services Smoke Test');

    // Adds first question
    await browser
      .click(page(1))
      .setValue(setQuestionTitle(), 'Test Question 1');

    await addAnswer('Test Answer 1');

    // Adds second Question
    await addQuestionPage()
      .waitForExist(page(2))
      .setValue(setQuestionTitle(), 'Test Question 2');

    await addAnswer('Test Answer 2');

    // Preview and verifies the newly created questionnaire
    await browser
      .click(clickPreview())
      .getTabIds()
      .then(tabIds => browser.switchTab(tabIds[1]));

    const previewTitle = await browser.getTitle();
    expect(previewTitle).equal('Test Question 1 - Smoke Test title');

    let blockTitle = await browser.getText(getBlockTitle());
    expect(blockTitle).equal('eQ Services Smoke Test');

    // Edits the title and previews the survey again to assert
    // the edited title and confirm that we are not caching data
    await browser
      .getTabIds()
      .then(tabIds => browser.switchTab(tabIds[0]))
      .click(sectionLink())
      .pause(500)
      .setValue(setSectionTitle(), 'Edited ')
      .click('body')
      .waitUntil(() =>
        browser
          .getText(sectionLink())
          .then(text => text !== 'eQ Services Smoke Test'))
      .click(clickPreview())
      .getTabIds()
      .then(tabIds => browser.switchTab(tabIds[2]));

    blockTitle = await browser.getText(getBlockTitle());
    expect(blockTitle).equal('Edited eQ Services Smoke Test');

    // Check preview questionnaire can be submitted
    await browser
      .click(clickContinue())
      .pause(1000)
      .click(clickContinue())
      .pause(1000);

    blockTitle = await browser.getText(getBlockTitle());
    expect(blockTitle).equal('You are now ready to submit this survey');

    await browser.click(clickContinue());

    const pageTitle = await browser.getText(getHeading());
    expect(pageTitle).equal('Submission successful');
  });
});
