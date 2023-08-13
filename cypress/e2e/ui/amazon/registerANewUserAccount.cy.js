/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("Account Creation", () => {
  before(() => {
    cy.visit(Cypress.env("amazon_url"));
  });
  it("Register a new User Account", () => {
    const username = faker.person.firstName("male");
    const email = faker.internet.email();
    const password = faker.internet.password();

    cy.contains("a", "Comece aqui.", { timeout: 10000 }).click({ force: true });
    cy.RegisterNewAmazonAccount(username, email, password);
  });
});
