
describe('Login Functionality', () => {

    it('Login with Valid Credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('input[value="LOGIN"]').click()
        cy.get('img[alt="OrangeHRM"]').should('be.visible')
        cy.get('#Assign Leave').click()
    })


    it('Login with Invalid Credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('adm23')
        cy.get('input[value="LOGIN"]').click()
        cy.get('#spanMessage').should('be.visible')
    })


})