import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login Orange HRM Tests', () => {


    it('Login Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.Userfail.username,userData.Userfail.password)
    loginPage.checkAcessInvalid()

    })
  it('Login Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.Usersucess.username,userData.Usersucess.password)
    dashboardPage.checkDashBoardPage()
  })




  
})