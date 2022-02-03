class cart {
    constructor() {}
  
    visit() {
      cy.visit("/cart.html");
    }
    removeFirstItemFromCart() {
      cy.get('td').contains('Delete').first().click()
      cy.wait(2000)
    }
    makePurchase(name, country, city, credit, month, year){ 
      cy.get('button').contains('Place Order').click()
      cy.wait(1000)
      cy.get('input[id=name]').type(name)
      cy.get('input[id=country]').type(country)
      cy.get('input[id=city]').type(city)
      cy.get('input[id=card]').type(credit)
      cy.get('input[id=month]').type(month)
      cy.get('input[id=year]').type(year)
      cy.wait(1000)
      cy.get('button').contains('Purchase').click()
      cy.wait(1000)
      cy.get('h2').should('contain', 'Thank you for your purchase!').and("be.visible")
      cy.get('p').should('contain', 'Id')
      cy.get('p').should('contain', 'Amount:')
      cy.get('p').should('contain', 'Card Number: '+credit)
      cy.get('p').should('contain', 'Name: '+name)
      cy.get('p').should('contain', 'Date: '+month+'/1/'+year)
      cy.get('button').contains('OK').click()
    }
  }
  export default cart;
  