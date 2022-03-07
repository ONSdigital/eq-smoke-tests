import { signIn, testId, createQuestionnaire } from "../utils";

describe("Page", () => {
  const questionnaireTitle = "Page";
  before(() => {
    cy.visit("/");

    signIn();

    createQuestionnaire({ title: questionnaireTitle });
  });

  beforeEach(() => {
    cy.visit("/#/");
    cy.get(`${testId("table-row")} span`)
      .contains(questionnaireTitle)
      .click();
  });

  it("Can create a new page", () => {
    cy.get(testId("NavItem")).should("have.length", 2);

    cy.get(testId("CollapsibleNavItem-title")).first().click();

    cy.get(testId("btn-add-menu")).click();

    cy.get(testId("btn-add-question-page")).click();

    cy.get(testId("NavItem")).should("have.length", 3);
  });

  it("Can delete a page", () => {
    cy.get(testId("NavItem")).should("have.length", 3);

    cy.get(testId("NavItem-title")).eq(1).click();

    cy.get(testId("btn-delete"))
      .click()
      .then(() => {
        cy.get(testId("btn-delete-modal")).click();
      });

    cy.get(testId("NavItem")).should("have.length", 2);
  });

  it("Can write a page title", () => {
    const pageTitle = "A page title.";
    cy.get(testId("NavItem")).eq(1).click();

    cy.get(testId("txt-question-title", "testid"))
      .clear()
      .type(pageTitle)
      .blur();

    cy.get(testId("txt-question-title", "testid"))
      .invoke("text")
      .should("equal", pageTitle);
  });

  it("Can add a valid answer to the page", () => {
    const answerLabel = "An answer label.";
    cy.get(testId("NavItem")).eq(1).click();

    cy.get(testId("btn-add-answer")).click();

    cy.get(testId("btn-answer-type-number")).click();

    cy.get(testId("txt-answer-label")).clear().type(answerLabel);

    cy.get(testId("txt-answer-label"))
      .invoke("text")
      .should("equal", answerLabel);
  });
});
