
export const testId = (id, attr = "test") => `[data-${attr}="${id}"]`;


export const signIn = () => {
    cy.get("input[name=email]").type("cypressTest@ons.com");
    cy.get("button[type=submit]").click();
    cy.get("input[name=password]").type("cypress");
    cy.get("button[type=submit]").click();
}

export const addQuestionnaire = title => {
    cy.get("[data-test='create-questionnaire']").click();
    setQuestionnaireSettings(title);
};

export function setQuestionnaireSettings(name) {
    cy.get(testId("questionnaire-settings-modal")).within(() => {
        cy
            .get(testId("txt-questionnaire-title"))
            .clear()
            .type(name);
        cy.get("label[for='navigation']").click();

        cy.get("form").submit();
    });
}

export const typeIntoDraftEditor = (selector, text) => {
    cy
        .log("Typing into RTE", text)
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