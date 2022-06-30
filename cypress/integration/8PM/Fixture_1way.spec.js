import data from "../../fixtures/multipal_data.json"

describe('verify the contact us form with multiple testcase', () => {
    data.forEach(function (info, index) {
        it('verify the contact us form with multipal data set', () => {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info.firstname)
            cy.get('input[name="last_name"]').type(info.lastname)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.message)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
})