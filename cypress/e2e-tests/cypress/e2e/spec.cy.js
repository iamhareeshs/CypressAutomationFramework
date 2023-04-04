Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/')
  })
})