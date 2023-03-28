export {};

describe('Play Modes',() => { 
  it('shous a different number of empty cells', () => {
    
    const selectDificulty = 'select.status__difficulty-select';

    cy.visit('/')
    cy.get(selectDificulty).should(
      'have.value',
      'Easy'
    )

    cy.get('.game__cell--filled').should('have.length', 45);

    cy.get(selectDificulty).select('Medium')
    cy.get('.game__cell--filled').should('have.length', 40);


    cy.get(selectDificulty).select('Hard')
    cy.get('.game__cell--filled').should('have.length', 30);
  })
 })
