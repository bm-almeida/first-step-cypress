class myInfoPage {
 
    selectorsList () {

     const selectors = {  
       
       // myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        firstNameField: "[name='firstName']",
        //middleNameField: ".oxd-grid-1",
        lastNameField: "[name='lastName']",
        genericDateField: "[placeholder='yyyy-mm-dd']",
        genericField: ".oxd-input",
        genericComboBox: '.oxd-select-text--arrow',
        secondItemComboBox: '.oxd-select-dropdown > :nth-child(2)', 
        thirdItemComboBox: '.oxd-select-dropdown > :nth-child(2)', 
        dateCloseButton: '.--close',
        submitButton: '.orangehrm-left-space',
     
    }

    return selectors
    }
    
    fillPersonalDetails (firstName,lastName, nickName) {
    
    cy.get(this.selectorsList().firstNameField).should('be.visible').clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).should('be.visible').clear().type(lastName)
    cy.get(this.selectorsList().genericField).eq(3).should('be.visible').clear().type(nickName)
    }

    fillEmployeeDetails (employeeId, otherId, driversLicenseDate, licenseExpiryDate) {

    
    cy.get(this.selectorsList().genericField).eq(4).should('be.visible').clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(5).should('be.visible').clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(6).should('be.visible').clear().type(driversLicenseDate)
    cy.get(this.selectorsList().genericField).eq(7).should('be.visible').clear().type(licenseExpiryDate)
    cy.get(this.selectorsList().dateCloseButton).click()
    //cy.get(this.selectorsList().genericDateField).eq(0).clear().type("1990-01-01")
    //cy.get(this.selectorsList().genericField).eq(9).clear().type("testField")
    }

   saveForm (){
       cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
       cy.get('body').should('contain', 'Successfully Updated')
       cy.get('.oxd-toast-close').click()
    }

       fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
        cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true})
        cy.get(this.selectorsList().thirdItemComboBox).click()
    }
    


    }

export default myInfoPage