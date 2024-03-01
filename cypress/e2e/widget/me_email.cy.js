import { firstStep, secondStep, payment } from "./reuse/reuse";

describe("Order", function () {
   it("Test widget Self/Email", function () {
     firstStep();
     secondStep();

     cy.get("#select_me").click(); //send to yourself
     cy.get("#select_email").click(); //send by email

     cy.get("#from_name").type(Cypress.env().name_sender);
     cy.get("#to_send").type(Cypress.env().email_sender);
     cy.get("#nextButton").click();
     payment();
   });
});