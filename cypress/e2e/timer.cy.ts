export {};

describe('empty screen',() => { 
  it('passes', () => {
    cy.visit('/')
    for(let k = 0; k < 10; k++) {
      cy.contains('.status__time', `00:0${k}`)
    }
  })

  it.skip('shouws minutes and seconds since the game started', () => {
    cy.clock()
    cy.visit('/')
    cy.contains('.status__time', `00:00`)
    cy.tick(30_000)
    cy.wait(0)
    cy.contains('.status__time', `00:30`)
  })

 })
