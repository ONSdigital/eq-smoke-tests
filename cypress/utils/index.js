export const testId = (id, attr = "test") => `[data-${attr}="${id}"]`;

export const signOut = () => {
  cy.visit("/");
  cy.wait(2000);
  cy.get("body").then(($body) => {
    if ($body.find("span[data-test=username]").length) {   //evaluates as true
        cy.get("span[data-test=username]").click();
    }
  });
}

export const signIn = () => {
  cy.get("input[name=email]").type("cypressTest@ons.gov.uk");
  cy.get("button[type=submit]").click();
  cy.get("input[name=password]").type("cypress");
  cy.get("button[type=submit]").click();
};

export const createQuestionnaire = ({
  title,
  shortTitle,
  type,
  sectionNavigation,
  answerSummary,
}) => {
  cy.get(testId("create-questionnaire")).click();

  cy.get(testId("txt-questionnaire-title")).clear().type(title);

  if (shortTitle) {
    cy.get(testId("txt-questionnaire-short-title")).clear().type(shortTitle);
  }

  cy.get(testId("select-questionnaire-type")).select(type || "Business");

  if (sectionNavigation) {
    cy.get(testId("navigation")).click();
  }

  if (answerSummary) {
    cy.get(testId("summary")).click();
  }

  cy.get("form").submit();
};
