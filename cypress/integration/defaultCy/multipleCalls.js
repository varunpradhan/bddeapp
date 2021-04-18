/// <reference types="Cypress" />

import LoginObject from '../../support/PageObjects/LoginObject'
import editEmployee from '../../step_definitions/common/editEmployee'

const LoginObj = new LoginObject()
const editEmpObj = new editEmployee()

describe("App testing", () => {
  it("Login to app", () => {
      LoginObj.visit()
      LoginObj.clickOnLogin()
      LoginObj.enterLoginDetails()
      cy.contains("Employee List").click()
      editEmpObj.benefitEmp(1)
      cy.contains("Employee List").click()
      editEmpObj.benefitEmp(2)
      cy.contains("Employee List").click()
  });
});
