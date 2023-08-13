/// <reference types="cypress" />

Cypress.Commands.add("getWeatherInformationByApi", (lat, lon, appId) => {
  cy.request({
    method: "GET",
    url: Cypress.env("open_weather_api"),
    failOnStatusCode: false,
    qs: {
      lat,
      lon,
      appId,
    },
  });
});
