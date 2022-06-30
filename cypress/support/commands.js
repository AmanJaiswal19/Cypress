// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// cypress.commands.add('login', (username, passward) => {
//     cy.get('from.input-group>#user_email').eq(0).type(username)
//     cy.get('form-control password optional').eq(0).type(passward)
//     cy.get('buttin[class=btn btn-primary submit ]').eq(0).click()
// })
// describe('creating custom command', () => {
//     beforeEach(() => {
//         cy.visit('/')
//     })
//     it('use the custom command for lofin', () => {
//         cy.login('shubhangi5693@gmail.com', 'Test@123');
//     })
// })

require('@4tw/cypress-drag-drop')

import 'cypress-iframe';

Cypress.Commands.add('login', (username, password) => {

    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').type(username)
    cy.get('#txtPassword').type(password)
    cy.get('#btnLogin').click()
    cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')
})


Cypress.Commands.add('validateTable', (id, value) => {

    let sum = 0
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get(`#t0${id}`).find('tr').as("tableRow")
    cy.get('@tableRow').should('have.length', 4)

    //[tr,tr,tr,tr]
    cy.get('@tableRow').each(function (el, index) {
        if (index != 0) {
            sum = sum + Number(el.children().last().text())
        }
    }).then(() => {

        expect(sum).to.equal(value)
    })
})

import 'cypress-file-upload';


Cypress.Commands.add('validateContactUs', (first_name, last_name, email, message) => {
    cy.get('input[name="first_name"]').type(first_name)
    cy.get('input[name="last_name"]').type(last_name)
    cy.get('input[name="email"]').type(email)
    cy.get('textarea[name="message"]').type(message)
})




