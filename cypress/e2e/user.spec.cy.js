import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import myInfoPage from '../pages/myInfoPage'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfo = new myInfoPage() 


describe('Orange HRM Tests', () => {



  

  it('User Info update Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.Usersucess.username,userData.Usersucess.password)
   
    dashboardPage.checkDashBoardPage()
    menuPage.accessMyInfo()
    
    myInfo.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfo.fillEmployeeDetails("TestEmpId", "TestId", 121212, "2026-12-12")
    myInfo.fillStatus()
    myInfo.saveForm()
    
   
    
  })

})