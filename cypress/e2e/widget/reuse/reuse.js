export const firstStep = () => {
  cy.visit(Cypress.env().url_widget + "demo/shop"); // visit page by url
  cy.get("#message").type(Cypress.env().message); //enter message
  cy.get("#nextDesign").click(); //select design, right
  cy.get("#nextButton").click(); //Next page
};

export const secondStep = () => {
  cy.get("#counterIncrease").click(); //select the number of cards +1 card
  cy.get("#amount2000").click(); //select card denomination, denomination 2000
  cy.get("#nextButton").click(); //Next page
};

export const payment = () => {
  cy.get("#payButton").click();

  cy.get("#iFrameResizer0")
      .should("be.visible")
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");

        cy.wrap($body).find(".qa-payment-option-preview").eq(0).click();

        cy.wrap($body)
            .find(".MuiOutlinedInput-input")
            .eq(0)
            .type(Cypress.env().bank_card_number);

        cy.wrap($body).find(".MuiOutlinedInput-input").eq(1).type("10");

        cy.wrap($body).find(".MuiOutlinedInput-input").eq(2).type("27");

        cy.wrap($body).find(".MuiOutlinedInput-input").eq(3).type("123");

        cy.wrap($body).find(".MuiButton-sizeLarge").click();

        cy.url().should("include", "/demo/success"); // if you were redirected to the “payment was successful” page, the tests passed
      });
};