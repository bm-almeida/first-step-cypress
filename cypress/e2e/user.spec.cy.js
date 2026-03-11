import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {



  

  it.only('User Info update Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.Usersucess.username,userData.Usersucess.password)
   
    dashboardPage.checkDashBoardPage()
   
    menuPage.accessAdmin()
    menuPage.accessPim()
    menuPage.accessLeave()
    menuPage.accessTime()
    menuPage.accessRecruitment()
    menuPage.accessMyInfo()
    menuPage.accessPerformance()
    menuPage.accessDashboard()
    menuPage.accessDirectory()
    //menuPage.accessMaintenance()
    menuPage.accessClaim()
    menuPage.accessBuzz()  


    
  })
  it('Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.Userfail.username)
    cy.get(selectorsList.passwordField).type(userData.Userfail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)


  })
})