/// <reference types="cypress" />

describe("Add products to cart", () => {
  before(() => {
    cy.visit(Cypress.env("amazon_url"));
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
