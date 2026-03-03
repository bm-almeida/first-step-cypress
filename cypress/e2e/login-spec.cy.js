describe('template spec', () => {
  it('Pass', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('header').contains('Dashboard')
  })
  it('Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('admin1')
    cy.get('[name="password"]').type('admin23')
    cy.get('.oxd-button').click()
    cy.get("[role='alert']")


  })
})