class HomePage {
  constructor() {}

  visit() {
    cy.visit("/");
  }
  //Get a listing for all products 
  getAllProducts(){ 
    cy.get('a[id=cat]').click()
    //Intercept the request to make sure it is done correctly
    cy.intercept('GET', '/entries*').as('entries')
    cy.wait('@entries', {
      timeout: 6000,

    })
    .its('response.body').then((res)=> {
      const length = res.id
      console.log(length)
      return length 
    })

  }
  
  //Get all phones by clicking on the category menu for phones . 
  getPhones()  { 
    cy.get('a').contains('Phones').click()
    //Intercept the request to make sure it is done correctly
    cy.intercept('GET', '/bycat*').as('bycat')
    cy.wait('@bycat', {
      timeout: 6000,
    })
    .its('response.statusCode').should('eq',200)
  }
// Simple login test with some assertions depending on the test performed on the alerts . Cypress accepts alerts automatically 
  logIn(id, pass, testType) {
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
  //Simple logout test
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
export default HomePage;
