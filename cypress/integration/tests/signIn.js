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
  it("should be able to sign in to the application", () => {
    home.signIn(id, password, 1);
  });

  it("should not be able to sign in the application with a duplicated user id", () => {
    home.signIn(id, password, 2);
  });
});
