/// <reference types="cypress" />

import "cypress-network-idle";

describe("Add products to cart", () => {
  before(() => {
    cy.intercept("**/1/events/com.amazon.csm.csa.prod", {
      statusCode: 200,
    }).as("longQuery1");

    cy.intercept("**/suggestions", {
      statusCode: 200,
    }).as("longQuery2");

    cy.visit(Cypress.env("amazon_url"));
    cy.wait("@longQuery1");
    cy.wait("@longQuery2");
  });
  it("Should add products to cart and validate if the total price is correct", () => {
    cy.addAProduct("headphone", "B0BMKJ9HGT");
    cy.addAProduct("camera de segurança", "B09RGFFQ5K");
    cy.getCartTotalPrice().should((res) => {
      const totalPrice = res.substring(4);
      expect(totalPrice).equal("501,67");
    });
  });
});
