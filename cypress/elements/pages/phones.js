class phones {
  constructor() {}

  visit() {
    cy.visit("/");
  }
  addToCart(id, pass, testType) {
    cy.get("[id=login2]").click();
    cy.wait(2000);
    cy.get("[id=loginusername]").type(id);
    cy.wait(1000);
    cy.get("[id=loginpassword]").type(pass);
    cy.get("button").contains("Log in").click({ force: "true" });
    switch (testType) {
      case 1:
        cy.get("[id=nameofuser]").should("contain", "Welcome " + id);
        break;
      case 2:
        cy.on("window:alert", (str) => {
          expect(str).to.equal("User does not exist.");
        });
        break;
    }
  }
  logOut() {
    cy.get("[id=logout2]").click();
    cy.get("[id=login2]").should("be.visible");
    cy.get("[id=logout2]").should("not.be.visible");
  }

  signIn(id, pass, testType) {
    cy.get("[id=signin2]").click();
    cy.wait(2000);
    cy.get("[id=sign-username]").type(id);
    cy.wait(1000);
    cy.get("[id=sign-password]").type(pass);
    cy.get("button").contains("Sign up").click({ force: "true" });
    switch (testType) {
      case 1:
        cy.on("window:alert", (str) => {
          expect(str).to.equal("Sign up successful.");
        });

        break;
      case 2:
        cy.on("window:alert", (str) => {
          expect(str).to.equal("This user already exist.");
        });
        break;
    }
    cy.visit("/");
  }
}
export default phones;
