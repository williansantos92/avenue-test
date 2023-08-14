describe("Weather Information", () => {
  const lat_poa = "-30.02";
  const lon_poa = "-51.22";

  const lat_rj = "-22.90";
  const lon_rj = "-43.20";
  const appId = Cypress.env("appid");

  it("Get Weather Information to Porto Alegre", () => {
    cy.getWeatherInformationByApi(lat_poa, lon_poa, appId).then((res) => {
      expect(res.status).equal(200);
      expect(res.body.sys.country).equal("BR");
      expect(res.body.name).equal("Porto Alegre");
    });
  });

  it("It is mandatory to pass a valid app id", () => {
    cy.getWeatherInformationByApi(lat_poa, lon_poa).then((res) => {
      console.log(res);
      expect(res.status).equal(401);
      expect(res.body.message).equal(
        "Invalid API key. Please see https://openweathermap.org/faq#error401 for more info."
      );
    });
  });

  it("Get Weather Information to Rio de Janeiro", () => {
    cy.getWeatherInformationByApi(lat_rj, lon_rj, appId).then((res) => {
      expect(res.status).equal(200);
      expect(res.body.sys.country).equal("BR");
      expect(res.body.name).equal("Rio de Janeiro");
      expect(res.body.visibility).not.null;
      expect(res.body.main).has.property("temp");
      expect(res.body.main).has.property("pressure");
      expect(res.body.main).has.property("humidity");
    });
  });
});
