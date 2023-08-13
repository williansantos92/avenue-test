/// <reference types="cypress" />

Cypress.Commands.add("addAProduct", (productName, productAsin) => {
  cy.get("div input#twotabsearchtextbox").type(productName);
  cy.get("input#nav-search-submit-button").click({ force: true });
  cy.get(`div div[data-asin="${productAsin}"]`, { timeout: 10000 }).click();
  cy.get("input#add-to-cart-button", { timeout: 20000 }).click({
    force: true,
  });

  cy.contains("Adicionado ao carrinho").should("be.visible");
});

Cypress.Commands.add("getCartTotalPrice", () => {
  cy.get("span#nav-cart-count").click();
  return cy.get("span#sc-subtotal-amount-buybox").invoke("text");
});

Cypress.Commands.add(
  "RegisterNewAmazonAccount",
  (username, email, password) => {
    cy.get("input#ap_customer_name").type(username);
    cy.get("input#ap_email").type(email);
    cy.get("input#ap_password").type(password);
    cy.get("input#ap_password_check").type(password);
  }
);
