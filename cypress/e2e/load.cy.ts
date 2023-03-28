export {};

describe('empty screen', () => { 
  it('passes', () => {
    cy.visit('/')
    cy.contains('.status__time', '00:03')
    cy.get('.game__cell--filled').should('have.length.greaterThan', 29);
  });
 })
