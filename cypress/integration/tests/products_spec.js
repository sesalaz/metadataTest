import Homepage from "../../elements/pages/homePage";
import Products from "../../elements/pages/products";


describe("Add or Delete products and make purchases", () => {
  const home = new Homepage();
  const phones = new Products();

  beforeEach(() => {
    cy.fixture("testData.json").as("testData");
    //Prepping necessary requests to intercept 
    cy.intercept('POST', '/check*').as('check')
    home.visit();

  });

  // Unfortunately I was unable to complete this test, I didnt want you guys to keep waiting, my best guess is to use the entries endpoint to get the array for the ids on the main category section 
  // and comparing it to other arrays for each category, but cypress is not playing along with me at the moment, Im confident I can figure this out though 
  it("should be able to validate that all categories have all items", () => {
   
   const totalProducts = home.getAllProducts()
   console.log(totalProducts)

  });
});