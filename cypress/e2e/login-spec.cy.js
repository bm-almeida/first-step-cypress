import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: 'header',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  

  it('Pass', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.Usersucess.username)
    cy.get(selectorsList.passwordField).type(userData.Usersucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList. dashboardGrid)
  })
  it('Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.Userfail.username)
    cy.get(selectorsList.passwordField).type(userData.Userfail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)


  })
})