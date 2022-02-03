import Homepage from "../../elements/pages/homePage";
describe("Log In and Out of the app", () => {
  const home = new Homepage();

  beforeEach(() => {
    cy.fixture("testData.json").as("testData");
    home.visit();
  });
   //Simple tests for login , as depicted on test number 1 , Im using here parametrization using cypresses own fixture system for static test data. 
  it("should be able to log in the application with the test data user", () => {
    cy.get("@testData").then((testData) => {
      home.logIn(`${testData.username}`, `${testData.password}`, 1);
    });
  });

  it("should not be able to log in with invalid users", () => {
    cy.get("@testData").then((testData) => {
      home.logIn(`${testData.wrongUsername}`, `${testData.password}`, 2);
    });
  });
  it("should be able to log out", () => {
    cy.get("@testData").then((testData) => {
      home.logIn(`${testData.username}`, `${testData.password}`, 1);
      home.logOut();
    });
  });
});
