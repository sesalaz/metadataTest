class products {
  constructor() {}

  visit() {
    cy.visit("/prod.html");
  }
  addToCart() {
    cy.wait(3000)
    cy.get('a').contains('Add to cart').click()
    //Validating that the request passes correctly with a 200 response. 
    cy.intercept('POST', '/addtocart*').as('addtoCart')
    cy.wait('@addtoCart', {
      timeout: 6000,
    })
    .its('response.statusCode').should('eq',200)
  }
}
export default products;
