import * as Locators from '../Locators/LoginLocators'

class LoginObject {
    visit() {
        cy.visit("/")
    }

    clickOnLogin() {
        Locators.loginLink().should('be.visible')
        Locators.loginLink().click()
    }

    enterLoginDetails() {
        cy.fixture('app').as('data')
        cy.get('@data').then(($data) => {
            Locators.userName().type($data.userName)
            Locators.userName().should(($usrName) => {
                expect($usrName).to.have.id('UserName')
                expect($usrName).to.have.prop('name', 'UserName')
            })
            Locators.password().type($data.Password)
        })
    }

    clickLoginButton() {
        Locators.logIn().click()
    }

}

export default LoginObject