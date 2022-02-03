//For this particular test I will be showing a test that goes through multiple page objects and also how to intercept and assert requests.  This should cover tests 2 and 3 of the instructions
import Homepage from "../../elements/pages/homePage";
import Products from "../../elements/pages/products";
import Cart from "../../elements/pages/cart"


describe("Add or Delete products and make purchases", () => {
  const home = new Homepage();
  const phones = new Products();
  const cart = new Cart();

  beforeEach(() => {
    cy.fixture("testData.json").as("testData");
    //Prepping necessary requests to intercept 
    cy.intercept('POST', '/check*').as('check')
    cy.intercept('POST', '/viewcart*').as('viewcart')
    home.visit();

  });
  it("should be able to add and delete phones from the main site into the cart and make a purchase", () => {
    
    cy.get("@testData").then((testData) => {
     //log in 
      home.logIn(`${testData.username}`, `${testData.password}`, 1);
      home.getPhones()
      //Click on the first phone on the list. 
      cy.get('div[class$=h-100]').find('a').first().click()
      phones.addToCart();
      home.visit() 
      home.getPhones()
      //Click on the last phone on the list. 
      cy.get('div[class$=h-100]').last().find('a').first().click()
      phones.addToCart();  
      //Go to the Cart
      cart.visit()  
     //Get the value from the total before we delete the first phone
     cy.wait(3000)
      cy.get("h3[id=totalp]")
      .invoke('text')
      .then((text1) => {
        // Remove the First phone
        cart.removeFirstItemFromCart()             
        //Intercept requests to see if they will be executed properly    
         cy.wait('@check', {
            timeout: 6000,
          })
          .its('response.statusCode').should('eq',200)        
          cy.wait('@viewcart', {
             timeout: 6000,
           })
           .its('response.statusCode').should('eq',200)
        cy.reload()
         // grab the text again and compare its previous text
        // to the current text
        cy.wait(1000)
        cy.get('h3[id=totalp]')
          .invoke('text')
          .should((text2) => {
            expect(text1).not.to.eq(text2)
          })
      })
      //Make the purchase and fill the modal with the personal information 
      cart.makePurchase(`${testData.customerName}`,`${testData.customerCountry}`,`${testData.customerCity}`,`${testData.customerCreditCard}`,`${testData.month}`,`${testData.year}`)
    });
  });
});