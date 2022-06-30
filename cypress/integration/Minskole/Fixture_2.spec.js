import { data } from "../../fixtures/User_1.json"
// let s = require('fixtures/example3.json') (2nd way)

describe('verify the functionality of fixture 2nd way', () => {
    data.forEach(function (el) {
        it('verify the fixture', () => {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.comments)
            cy.get('input[value ="SUBMIT"]').click()
            cy.contains('h1').should('have.text','Thank You for your Message!')
        })
    })
})
