import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor'

Given('User open the product review form', ()=>{
    cy
    .visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
    .get('div[data-automation-id="formTitle"]')
    .should('contain','Review our product')
});

When('User input the full name field with {string}', fullName =>{
    cy
    .get('#QuestionId_r9f62b2a1fbe746ab953326f6937d4e73').siblings()
    .find('input')
    .type(fullName)
});

When('User input the phone number field with {string}', phoneNumber =>{
    cy
    .get('#QuestionId_r5c2dd5cf6732459894e3d1cb504c8110').siblings()
    .find('input')
    .type(phoneNumber)
});

When('User select the product or service price rate', ()=>{
    cy
    .get('#QuestionId_r8bc17b753f0048ecb03794ef45037bb7')
    .siblings()
    .find('div[data-automation-id="choiceItem"]')
    .first()
    .click()
});

When('User rate the given services', ()=>{
    cy
    .get('#QuestionId_r9f97f2550332479a8fdd2914bd99bc1d').siblings()
    .find('span[aria-label="3 Star"]')
    .click()
});

When('User input the review date', ()=>{
    cy
    .get('#QuestionId_r1abee94394494318b1e34a419838e56c').siblings()
    .find('input')
    .click()
    .get('#DatePicker-Callout1')
    .find('td[aria-selected="true"]')
    .click()
});

When('User click the submit button', ()=>{
    cy
    .get('button').contains('Submit')
    .click()
    .wait(3000)
});

Then('User should see the success message', ()=>{
    cy
    .get('div[data-automation-id="thankYouMessage"] > span')
    .should('contain','Your response has been successfully recorded.')
});

Then('User should see an error message below full name field', ()=>{
    cy
    .get('#ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73')
    .should('contain','This question is required.')
});

Then('User should see an error message below phone number field', ()=>{
    cy
    .get('#ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110')
    .should('contain','This question is required.')
});

Then('User should see an error message below product or service price rate field', ()=>{
    cy
    .get('#ErrorMsgId_r8bc17b753f0048ecb03794ef45037bb7')
    .should('contain','This question is required.')
});

Then('User should see an error message below services rate field', ()=>{
    cy
    .get('#ErrorMsgId_r9f97f2550332479a8fdd2914bd99bc1d')
    .should('contain','This question is required.')
});

Then('User should see an error message below review date field', ()=>{
    cy
    .get('#ErrorMsgId_r1abee94394494318b1e34a419838e56c')
    .should('contain','This question is required.')
});

Then('User should see an error message below the product review form', ()=>{
    cy
    .get('div[data-automation-id="submitError"')
    .should('contain','5 question(s) need to be completed before submitting: Question 1,Question 2,Question 3,Question 4,Question 5.')
});