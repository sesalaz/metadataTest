class cart {
    constructor() {}
  
    visit() {
      cy.visit("/cart.html");
    }
    removeFirstItemFromCart() {
      cy.get('td').contains('Delete').first().click()
      cy.wait(2000)
    }
  }
  export default cart;
  