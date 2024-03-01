import { firstStep, secondStep, payment } from "./reuse/reuse";


describe("Order", function () {
   it("Test widget to friend/email", function () {
     firstStep();
     secondStep();

     cy.get("#select_other").click(); //send to a friend
     cy.get("#select_sms").click(); //sending via sms

     cy.get("#from_name").type(Cypress.env().name_sender);
     cy.get("#from_email").type(Cypress.env().email_sender);
     cy.get("#to_name").type(Cypress.env().name_recipient);
     cy.get("#to_send").type(Cypress.env().phone_recipient);

     cy.get("#nextButton").click();
     payment();
   });
});