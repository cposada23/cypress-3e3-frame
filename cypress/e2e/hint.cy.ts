export {};

describe('Hint',() => { 
  it('passes', () => {
    cy.visit('/')
    
    cy.get('.game__cell').not('.game__cell--filled').each($cell => {
      cy.wrap($cell).click()
      cy.get('.status__action-hint').click()
    })

    cy.get('.overlay__text')
      .should('have.text', 'You solved it!')
      .and('be.visible')

  })
 })
