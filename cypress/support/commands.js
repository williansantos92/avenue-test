// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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

Cypress.Commands.add("RegisterNewAccount", (username, email, password) => {
  cy.get("input#ap_customer_name").type(username);
  cy.get("input#ap_email").type(email);
  cy.get("input#ap_password").type(password);
  cy.get("input#ap_password_check").type(password);
});
