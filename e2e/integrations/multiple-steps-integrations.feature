@multiple-steps-integrations
Feature: Test to verify advanced integration with multiple steps
  https://issues.jboss.org/browse/IPAAS-287
  
  Scenario: Create integration with one step
    When "Camilla" navigates to the "Home" page
    And clicks on the "Create Integration" button to create a new integration.
    Then she is presented with a visual integration editor
    And she is prompted to select a "Start" connection from a list of available connections

    When Camilla selects the "Twitter Example" connection
    And she selects "Mention" integration action
    Then she is prompted to select a "Finish" connection from a list of available connections

    When Camilla selects the "Salesforce Example" connection
    And she selects "Create Opportunity" integration action
    Then she is presented with the "Add a Step" button
    
    When Camilla click on the "Add a Step" button
    Then she selects "Filter" step
    And she is presented with a step configure page
    Then she fill configure page for filter step with "filter" condition
    And click on the "Next" button
    
    When click on the "Save" button
    And she defines integration name "One step integration"
    And click on the "Save as Draft" button
    Then Camilla is presented with the Syndesis page "Integrations"
    And Integration "One step integration" is present in integrations list

    When Camilla deletes the "One step integration" integration
    Then Camilla can not see "One step integration" integration anymore
   
  Scenario: Create integration with two steps
    When "Camilla" navigates to the "Home" page
    And clicks on the "Create Integration" button to create a new integration.
    Then she is presented with a visual integration editor
    And she is prompted to select a "Start" connection from a list of available connections

    When Camilla selects the "Twitter Example" connection
    And she selects "Mention" integration action
    Then she is prompted to select a "Finish" connection from a list of available connections

    When Camilla selects the "Salesforce Example" connection
    And she selects "Create Opportunity" integration action
    Then she is presented with the "Add a Step" button
    
    When Camilla click on the "Add a Step" button
    Then she is presented with a add step page
    Then she selects "Log" step
    And she is presented with a step configure page
    Then she fill configure page for log step with "log" message
    And click on the "Next" button
    
    When Camilla clicks on the "Add a Step" button
    Then Camilla is presented with the "Add a step" link
    And clicks on the "Add a step" link
    Then she selects "Filter" step
    And she is presented with a step configure page
    Then she fill configure page for filter step with "filter" condition
    And click on the "Next" button
    
    When click on the "Save" button
    And she defines integration name "Two steps integration"
    And click on the "Save as Draft" button
    Then Camilla is presented with the Syndesis page "Integrations"
    And Integration "Two steps integration" is present in integrations list

    When Camilla deletes the "Two steps integration" integration
    Then Camilla can not see "Two steps integration" integration anymore