import { firstStep, secondStep, payment } from "./reuse/reuse";


describe("Order", function () {
   it("Test widget Self/sms", function () {
     firstStep();
     secondStep();

     cy.get("#select_me").click(); //send to yourself
     cy.get("#select_sms").click(); //sending via sms

     cy.get("#from_name").type(Cypress.env().name_sender);
     cy.get("#from_email").type(Cypress.env().email_sender);
     cy.get("#to_send").type(Cypress.env().phone_sender);

     cy.get("#nextButton").click();
     payment();
   });
});