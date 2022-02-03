//For this particular test I will be showing a test that goes through multiple page objects and also how to intercept and assert requests.  This should cover tests 2 and 3 of the instructions
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
  it("should be able to validate that all categories have all items", () => {
   
   const totalProducts = home.getAllProducts()
   console.log(totalProducts)

  });
});