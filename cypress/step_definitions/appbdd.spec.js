/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginObject from '../support/PageObjects/LoginObject'
import * as Locators from '../support/Locators/LoginLocators'
import editEmployee from '../step_definitions/common/editEmployee'

const LoginObj = new LoginObject()
const editEmpObj = new editEmployee()

Given('I visit application', () => {
    LoginObj.visit()
})

And("I click on login link and check the visibility", () => { 
    LoginObj.clickOnLogin()
})

When('I am able to login as an administrator', () => {
    LoginObj.clickOnLogin()
    LoginObj.enterLoginDetails()
})

When('I am able to login with {string} and password as {string}', (userName, password) => {
    Locators.userName().type(userName)
    Locators.userName().should(($usrName) => {
        expect($usrName).to.have.id('UserName')
        expect($usrName).to.have.prop('name', 'UserName')
    })
    Locators.password().type(password)
})

When('I am able to enter login details', datatable => {
    datatable.hashes().forEach(row => {
        Locators.userName().type(row.UserName)
        Locators.password().type(row.Password)
    });
})

Then("I can view employee list", () => {
    cy.contains("Employee List").click()
})

And("I check benifits for employee on index {string}", (index) => {
    editEmpObj.benefitEmp(index)
})

And("I go to Employee List", () => {
    cy.contains("Employee List").click()
})