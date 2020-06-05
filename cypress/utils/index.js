export const testId = (id, attr = "test") => `[data-${attr}="${id}"]`;

export const signIn = () => {
  cy.get("input[name=email]").type("cypressTest@ons.gov.uk");
  cy.get("button[type=submit]").click();
  cy.get("input[name=password]").type("cypress");
  cy.get("button[type=submit]").click();
};

export const addQuestionnaire = title => {
  cy.get(testId("create-questionnaire")).click();
  setQuestionnaireSettings({ title, type: "Business" });
};

export function setQuestionnaireSettings({ title, type }) {
  cy.get(testId("questionnaire-settings-modal")).within(() => {
    if (title) {
      cy.get(testId("txt-questionnaire-title"))
        .clear()
        .type(title);
    }

    if (type) {
      cy.get(testId("select-questionnaire-type")).select(type);
    }

    cy.get(testId("navigation")).click();

    cy.get("form").submit();
  });
}

export const typeIntoDraftEditor = (selector, text) => {
  cy.log("Typing into RTE", text)
    .get(selector)
    .then(input => {
      var textarea = input.get(0);
      textarea.dispatchEvent(new Event("focus"));

      var textEvent = document.createEvent("TextEvent");
      textEvent.initTextEvent("textInput", true, true, null, text);
      textarea.dispatchEvent(textEvent);
      textarea.dispatchEvent(new Event("blur"));
    });
};
