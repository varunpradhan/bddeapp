Feature: Access Eaap

    I am able access eaap application and perform various senarios.
  
Scenario: Admin user is able to view employee list.
    Given I visit application
    When I am able to login as an administrator
    Then I can view employee list
    And I check benifits for employee on index '1'
    And I go to Employee List
    And I check benifits for employee on index '2'
    And I go to Employee List