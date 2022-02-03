import Homepage from "../../elements/pages/homePage";
describe("Sign In", () => {
  const randomId = () => Cypress._.random(0, 1e6);
  const id = randomId();
  const randomPass = () => Cypress._.random(0, 1e6);
  const password = randomPass();
  const home = new Homepage();

  beforeEach(() => {
    home.visit();
  });
  //Simple tests for signing and edge case contemplated in test number 1 .  In this particular case, Im using random ids and passwords generated above to give flexibility on IDs
  it("should be able to sign in to the application", () => {
    home.signIn(id, password, 1);
  });

  it("should not be able to sign in the application with a duplicated user id", () => {
    home.signIn(id, password, 2);
  });
});
