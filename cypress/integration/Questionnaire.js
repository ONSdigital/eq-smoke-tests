import { signIn, testId, createQuestionnaire } from "../utils";

describe("Questionnaire", () => {
  const shortTitle = "Questionnaire";

  beforeEach(() => {
    cy.visit("/");
  });

  it("Can create a business questionnaire", () => {
    const title = "It can create a business questionnaire";

    createQuestionnaire({ title, shortTitle, type: "Business" });

    cy.get(testId("nav-section-link")).should("have.length", 1);

    cy.get(testId("btn-settings")).click();

    cy.get(testId("change-questionnaire-title"))
      .invoke("val")
      .should("equal", title);

    cy.get(testId("questionnaire-type")).should("contain", "Business");
  });

  it("Can create a social questionnaire", () => {
    const title = "It can create a social questionnaire";

    createQuestionnaire({ title, shortTitle, type: "Social" });

    cy.get(testId("nav-section-link")).should("have.length", 1);

    cy.get(testId("btn-settings")).click();

    cy.get(testId("change-questionnaire-title"))
      .invoke("val")
      .should("equal", title);

    cy.get(testId("questionnaire-type")).should("contain", "Social");
  });

  it("Can enable section navigation on creation", () => {
    const title = "It can enable section navigation on creation";

    createQuestionnaire({
      title,
      shortTitle,
      type: "Business",
      sectionNavigation: true,
    });

    cy.get(testId("btn-settings")).click();

    cy.get("[name=toggle-section-navigation]").should("be.checked");
  });

  it("Can enable answer summaries on creation", () => {
    const title = "It can enable answer summaries on creation";

    createQuestionnaire({
      title,
      shortTitle,
      type: "Business",
      answerSummary: true,
    });

    cy.get(testId("btn-settings")).click();

    cy.get("[name=toggle-answer-summary]").should("be.checked");
  });
});
