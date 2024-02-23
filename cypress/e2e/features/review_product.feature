Feature: Review Product Form

Scenario: User Success to submit the product review
    Given User open the product review form
    When User input the full name field with "Kelvin"
    When User input the phone number field with "081234567890"
    When User select the product or service price rate
    When User rate the given services
    When User input the review date
    When User click the submit button
    Then User should see the success message
    
Scenario: User Cannot submit the product review form without filling out all required fields
    Given User open the product review form
    When User click the submit button
    Then User should see an error message below full name field
    Then User should see an error message below phone number field
    Then User should see an error message below product or service price rate field
    Then User should see an error message below services rate field
    Then User should see an error message below review date field
    Then User should see an error message below the product review form