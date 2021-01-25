import { testId, createQuestionnaire } from "../utils";

describe("Section", () => {
  const questionnaireTitle = "Section";
  before(() => {
    cy.visit("/");

    createQuestionnaire({ title: questionnaireTitle });
  });

  beforeEach(() => {
    cy.visit("/");
    
    cy.get(`${testId("table-row")} span`)
      .contains(questionnaireTitle)
      .click();
  });

  it("Can create a section", () => {
    cy.get(testId("nav-section-link")).should("have.length", 1);

    cy.get(testId("btn-add")).click();

    cy.get(testId("btn-add-section")).click();

    cy.get(testId("nav-section-link")).should("have.length", 2);
    cy.wait(2000)
  });

  it("Can delete a section", () => {
    cy.get(testId("nav-section-link")).should("have.length", 2);

    cy.get(testId("nav-section-link")).last().click();

    cy.get(testId("btn-delete"))
      .click()
      .then(() => {
        cy.get(testId("btn-delete-modal")).click();
      });

    cy.get(testId("nav-section-link")).should("have.length", 1);
  });
});
