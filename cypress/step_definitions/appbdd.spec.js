/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginObject from '../support/PageObjects/LoginObject'
import editEmployee from '../step_definitions/common/editEmployee'

const LoginObj = new LoginObject()
const editEmpObj = new editEmployee()

Given('I visit application', () => {
    LoginObj.visit()
})

When('I am able to login as an administrator', () => {
    LoginObj.clickOnLogin()
    LoginObj.enterLoginDetails()
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