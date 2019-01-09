import {
  addQuestionnaire,
  typeIntoDraftEditor,
  testId,
  signIn
} from "../utils";

describe("eq-services", () => {
  describe("Questionnaire creation", () => {
    it("Can create a questionnaire", () => {
      // Can create a questionnair
      cy.visit("/");
      signIn();
      addQuestionnaire("My Questionnaire Title");

      // Can name the Page and Section
      cy.get(testId("page-item")).click();
      typeIntoDraftEditor(
        testId("txt-question-title", "testid"),
        "This is Page 1"
      );
      cy.get(testId("side-nav")).should("contain", "This is Page 1");

      cy.get(testId("nav-section-link")).click();

      typeIntoDraftEditor(
        testId("txt-section-title", "testid"),
        "This is Section 1"
      );

      cy.get(testId("side-nav")).should("contain", "This is Section 1");

      // Can add a answer"
      cy.get(testId("page-item")).click();

      cy.get(testId("btn-add-answer")).click();

      cy.get(testId(`btn-answer-type-currency`)).click();

      cy.get("[data-test='txt-answer-label']").type("This is an answer label");

      cy.get("[data-test='txt-answer-description']").type(
        "This is an answer description"
      );

      // can switch to a Runner preview.", () => {
      cy.get(`[data-test="btn-preview"]`)
        .invoke("removeAttr", "target")
        .click();
    });
  });

  describe("Runner previewing", () => {
    it("Contains all the necessary fields in the correct formatting", () => {
      cy.get(testId(`question-title`, "qa")).should(
        "contain",
        "This is Page 1"
      );

      cy.get(testId(`input-text`, "qa")).should("exist");
    });
  });
});
