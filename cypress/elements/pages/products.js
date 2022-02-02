class products {
  constructor() {}

  visit() {
    cy.visit("/prod.html");
  }
  addToCart() {
    cy.wait(1000)
    cy.get('a').contains('Add to cart').click()
  }
}
export default products;
